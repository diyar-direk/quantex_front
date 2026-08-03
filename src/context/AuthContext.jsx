"use client";
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loading from "@/components/loading/Loading";
import axiosInstance from "@/utils/axios";
import AuthHelper from "@/utils/authHelper";
import { useRouter } from "next/navigation";
import { endPoints } from "@/constants/endPoints";
import { extarctErrorMessage } from "@/utils/extarctErrorMessage";

const AuthContext = createContext();

const authHelper = new AuthHelper();

export const AuthProvider = ({ children, token }) => {
  const query = useQueryClient();
  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);
  const { replace } = useRouter();

  const logout = useCallback(async () => {
    await axiosInstance.post(endPoints.users.logout);
    query.clear();
    authHelper.clearAllTokens();
    replace("/");
  }, [query, replace]);

  const processQueue = (error, token = null) => {
    failedQueue.current.forEach(({ resolve, reject }) => {
      if (error) reject(error);
      else resolve(token);
    });
    failedQueue.current = [];
  };

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = authHelper.getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        if (config.method !== "get") {
          config.toastId = toast.loading("Loading...");
        }

        return config;
      },
      (error) => {
        if (error.config?.toastId) {
          toast.dismiss(error.config.toastId);
        }

        return Promise.reject(error);
      },
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        if (response.config.toastId) {
          toast.dismiss(response.config.toastId);
        }

        if (response.config.method !== "get") {
          toast.success(
            response.data?.message || "Operation done successfully",
          );
        }

        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;
        const { url } = originalRequest || {};

        if (originalRequest?.toastId) {
          toast.dismiss(originalRequest.toastId);
        }

        if (url === endPoints.users.me || url === endPoints.users.refresh) {
          return Promise.reject(error);
        }

        if (status === 401 && !originalRequest._retry) {
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axiosInstance(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing.current = true;

          try {
            const { data } = await axiosInstance.post(endPoints.users.refresh);

            axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

            authHelper.setToken(data.accessToken);

            processQueue(null, data.accessToken);

            return axiosInstance(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError, null);
            logout();
            return Promise.reject(refreshError);
          } finally {
            isRefreshing.current = false;
          }
        }

        toast.error(extarctErrorMessage(error));

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [logout]);

  const { data: user, isLoading } = useQuery({
    queryKey: [endPoints.users.me],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endPoints.users.me);
      return data.data || null;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: Boolean(token),
  });

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
