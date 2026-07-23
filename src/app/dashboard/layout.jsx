import DashboardHeader from "@/components/layouts/dashboard_header/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader /> {children}
    </>
  );
};

export default DashboardLayout;
