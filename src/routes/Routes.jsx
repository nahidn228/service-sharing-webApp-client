import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService";
import AllServices from "../pages/AllServices";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ManageService from "../pages/ManageService";
import MyBookedServices from "../pages/MyBookedServices";
import ServiceDetails from "../pages/ServiceDetails";
import ServiceRequests from "../pages/ServiceRequests";
import UpdateService from "../pages/UpdateService";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-BookedService",
        element: (
          <PrivateRoute>
            <MyBookedServices></MyBookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-requests",
        element: (
          <PrivateRoute>
            <ServiceRequests></ServiceRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
