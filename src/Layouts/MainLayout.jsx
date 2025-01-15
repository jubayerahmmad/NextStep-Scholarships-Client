import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { loading } = useAuth();
  if (loading) return <Loader />;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
