"use client";
import Input from "@/components/inputs/Input";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@/components/buttons/Button";
import axiosInstance from "@/utils/axios";
import { endPoints } from "@/constants/endPoints";
import AuthHelper from "@/utils/authHelper";
import { useQueryClient } from "@tanstack/react-query";
import { pages } from "@/constants/pages";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const { setToken } = new AuthHelper();

const LoginPage = () => {
  const query = useQueryClient();
  const { replace } = useRouter();

  const t = useTranslations();

  const formik = useFormik({
    initialValues: { password: "", username: "" },
    validationSchema: yup.object({
      username: yup.string().required(t("error.required_field")),
      password: yup.string().required(t("error.required_field")),
    }),
    onSubmit: async (v) => {
      const { data } = await axiosInstance.post(endPoints.users.login, v);
      setToken(data.accessToken);
      query.invalidateQueries(endPoints.users);
      replace(pages.dashboard.page);
    },
  });

  return (
    <main className="container main-section login-page center">
      <form onSubmit={formik.handleSubmit}>
        <h1>{t("user.login")}</h1>
        <Input
          name="username"
          label={t("user.username")}
          placeholder={t("user.username_placeholder")}
          errorText={formik.errors.username}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <Input
          name="password"
          label={t("user.password")}
          placeholder={t("user.password_placeholder")}
          errorText={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button type="submit" isSending={formik.isSubmitting}>
          {t("user.login")}
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
