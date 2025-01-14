import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* Dynamically show outlet */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
