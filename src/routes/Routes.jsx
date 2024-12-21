import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService";
import AllServices from "../pages/AllServices";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BidRequests from "../pages/BidRequests";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyBids from "../pages/MyBids";
import MyPostedServices from "../pages/MyPostedServices";
import ServiceDetails from "../pages/ServiceDetails";
import UpdateJob from "../pages/UpdateJob";
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
        path: "/registration",
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
            <UpdateJob></UpdateJob>
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
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivateRoute>
            <MyPostedServices></MyPostedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-requests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
