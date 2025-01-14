import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllScholarships from "../Pages/AllScholarships/AllScholarships";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/CommonPage/MyProfile";
import AllUsers from "../Pages/AdminPages/AllUsers";
import AddScholarship from "../Pages/CommonPage/AddScholarship";
import AppliedScholarships from "../Pages/CommonPage/AppliedScholarships";
import ManageScholarships from "../Pages/CommonPage/ManageScholarships";
import AllReviews from "../Pages/CommonPage/AllReviews";
import MyApplications from "../Pages/UsersPages/MyApplications";
import MyReviews from "../Pages/UsersPages/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allScholarships",
        element: <AllScholarships />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      // Admin/Moderator Routes
      {
        path: "allUsers",
        element: <AllUsers />, // admin only
      },
      {
        path: "addScholarships",
        element: <AddScholarship />,
      },
      {
        path: "appliedScholarships",
        element: <AppliedScholarships />,
      },
      {
        path: "manageScholarships",
        element: <ManageScholarships />,
      },
      {
        path: "allReviews",
        element: <AllReviews />,
      },
      // User Routes
      {
        path: "myApplications",
        element: <MyApplications />,
      },
      {
        path: "myReviews",
        element: <MyReviews />,
      },
    ],
  },
]);

export default router;
