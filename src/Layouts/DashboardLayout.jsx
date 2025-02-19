import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="flex gap-3">
      <Helmet>
        <title>Dashboard | My Profile</title>
      </Helmet>
      {/* sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* Dynamically show outlet */}
      <div className="lg:ml-60 mt-[72px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
