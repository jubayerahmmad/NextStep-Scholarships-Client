import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-2">
      {/* sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* Dynamically show outlet */}
      <div className="p-4 lg:ml-60 mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
