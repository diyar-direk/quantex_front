"use client";
import DashboardHeader from "@/components/layouts/dashboard_header/DashboardHeader";
import { useAuth } from "@/context/AuthContext";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  // if (!user) return logout();

  return (
    <>
      <DashboardHeader /> {children}
    </>
  );
};

export default DashboardLayout;
