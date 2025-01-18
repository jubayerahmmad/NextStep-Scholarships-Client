import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";

const OnlyAdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (role === "Admin") {
    return children;
  }
  if (isLoading) return <Loader />;

  return <Navigate to="/dashboard/my-profile"></Navigate>;
};

export default OnlyAdminRoute;
