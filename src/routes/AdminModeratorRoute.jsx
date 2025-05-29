import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Loaders/Loader";

const AdminModeratorRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (role === "Admin" || role === "Moderator") {
    return children;
  }

  if (isLoading) return <Loader />;
  return <Navigate to="/dashboard/my-profile"></Navigate>;
};

export default AdminModeratorRoute;
