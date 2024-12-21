import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import JobDetails from '../pages/JobDetails'
import AddJob from '../pages/AddJob'
import ErrorPage from '../pages/ErrorPage'
import MyPostedJobs from '../pages/MyPostedJobs'
import UpdateJob from '../pages/UpdateJob'
import PrivateRoute from './PrivateRoute'
import MyBids from '../pages/MyBids'
import BidRequests from '../pages/BidRequests'
import AllJobs from '../pages/AllJobs'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/jobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Register></Register>,
      },
      {
        path: '/job/:id',
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
      },
      {
        path: '/add-job',
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
