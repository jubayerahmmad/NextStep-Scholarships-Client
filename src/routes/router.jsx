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
import ScholarshipDetails from "../Pages/ScholarshipDetails/ScholarshipDetails";
import Faq from "../Pages/Faq/Faq";
import AdminProfile from "../Pages/AdminPages/AdminProfile";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout/Checkout";
import ApplyScholarshipForm from "../components/Forms/ApplyScholarshipForm";
import OnlyAdminRoute from "./OnlyAdminRoute";
import AdminModeratorRoute from "./AdminModeratorRoute";
import UsersRoute from "./UsersRoute";

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
      {
        path: "scholarship-details/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/apply-form/:id",
        element: (
          <PrivateRoute>
            <ApplyScholarshipForm />
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: <Faq />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      // Admin/Moderator Routes
      {
        path: "allUsers",
        element: (
          <OnlyAdminRoute>
            <AllUsers />
          </OnlyAdminRoute>
        ), // admin only
      },
      {
        path: "admin-profile",
        element: (
          <OnlyAdminRoute>
            <AdminProfile />
          </OnlyAdminRoute>
        ), // admin only
      },
      {
        path: "addScholarships",
        element: (
          <AdminModeratorRoute>
            <AddScholarship />
          </AdminModeratorRoute>
        ),
      },
      {
        path: "appliedScholarships",
        element: (
          <AdminModeratorRoute>
            <AppliedScholarships />
          </AdminModeratorRoute>
        ),
      },
      {
        path: "manageScholarships",
        element: (
          <AdminModeratorRoute>
            {" "}
            <ManageScholarships />
          </AdminModeratorRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <AdminModeratorRoute>
            <AllReviews />
          </AdminModeratorRoute>
        ),
      },
      // User Routes
      {
        path: "myApplications",
        element: (
          <UsersRoute>
            <MyApplications />,
          </UsersRoute>
        ),
      },

      {
        path: "myReviews",
        element: (
          <UsersRoute>
            <MyReviews />
          </UsersRoute>
        ),
      },
    ],
  },
]);

export default router;
