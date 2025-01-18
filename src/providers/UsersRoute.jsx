import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";

const UsersRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (role === "User") {
    return children;
  }

  if (isLoading) return <Loader />;

  return <Navigate to="/dashboard/my-profile"></Navigate>;
};

export default UsersRoute;
