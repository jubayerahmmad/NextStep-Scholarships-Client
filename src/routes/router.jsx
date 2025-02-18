import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../Layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import OnlyAdminRoute from "./OnlyAdminRoute";
import AdminModeratorRoute from "./AdminModeratorRoute";
import UsersRoute from "./UsersRoute";
import Loader from "../components/Loader";
const Home = lazy(() => import("../Pages/Home/Home"));
const AllScholarships = lazy(() =>
  import("../Pages/AllScholarships/AllScholarships")
);
const Login = lazy(() => import("../Pages/AuthPages/Login"));
const Register = lazy(() => import("../Pages/AuthPages/Register"));
const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage"));
const MyProfile = lazy(() => import("../Pages/CommonPage/MyProfile"));
const AllUsers = lazy(() => import("../Pages/AdminPages/AllUsers"));
const AddScholarship = lazy(() => import("../Pages/CommonPage/AddScholarship"));
const AppliedScholarships = lazy(() =>
  import("../Pages/CommonPage/AppliedScholarships")
);
const ManageScholarships = lazy(() =>
  import("../Pages/CommonPage/ManageScholarships")
);
const AllReviews = lazy(() => import("../Pages/CommonPage/AllReviews"));
const MyApplications = lazy(() => import("../Pages/UsersPages/MyApplications"));
const MyReviews = lazy(() => import("../Pages/UsersPages/MyReviews"));
const ScholarshipDetails = lazy(() =>
  import("../Pages/ScholarshipDetails/ScholarshipDetails")
);
const Faq = lazy(() => import("../Pages/Faq/Faq"));
const AdminProfile = lazy(() => import("../Pages/AdminPages/AdminProfile"));
const Checkout = lazy(() => import("../Pages/Checkout/Checkout"));
const ApplyScholarshipForm = lazy(() =>
  import("../components/Forms/ApplyScholarshipForm")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "allScholarships",
        element: (
          <Suspense fallback={<Loader />}>
            <AllScholarships />
          </Suspense>
        ),
      },
      {
        path: "scholarship-details/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ScholarshipDetails />
          </Suspense>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Checkout />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/apply-form/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <ApplyScholarshipForm />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={<Loader />}>
            <Faq />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
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
        element: (
          <Suspense fallback={<Loader />}>
            <MyProfile />
          </Suspense>
        ),
      },
      {
        path: "allUsers",
        element: (
          <OnlyAdminRoute>
            <Suspense fallback={<Loader />}>
              <AllUsers />
            </Suspense>
          </OnlyAdminRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <OnlyAdminRoute>
            <Suspense fallback={<Loader />}>
              <AdminProfile />
            </Suspense>
          </OnlyAdminRoute>
        ),
      },
      {
        path: "addScholarships",
        element: (
          <AdminModeratorRoute>
            <Suspense fallback={<Loader />}>
              <AddScholarship />
            </Suspense>
          </AdminModeratorRoute>
        ),
      },
      {
        path: "appliedScholarships",
        element: (
          <AdminModeratorRoute>
            <Suspense fallback={<Loader />}>
              <AppliedScholarships />
            </Suspense>
          </AdminModeratorRoute>
        ),
      },
      {
        path: "manageScholarships",
        element: (
          <AdminModeratorRoute>
            <Suspense fallback={<Loader />}>
              <ManageScholarships />
            </Suspense>
          </AdminModeratorRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <AdminModeratorRoute>
            <Suspense fallback={<Loader />}>
              <AllReviews />
            </Suspense>
          </AdminModeratorRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <UsersRoute>
            <Suspense fallback={<Loader />}>
              <MyApplications />
            </Suspense>
          </UsersRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <UsersRoute>
            <Suspense fallback={<Loader />}>
              <MyReviews />
            </Suspense>
          </UsersRoute>
        ),
      },
    ],
  },
]);

export default router;
