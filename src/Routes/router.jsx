import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Component/Home";
import Industries from "../Pages/Industries";
import Job from "../Component/Job";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import JobDetails from "../Component/JobDetails";

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: HomeLayout,
      children: [


      ]
    },
    {
      path: '/auth',
      Component: AuthLayout,
      children: [
        {
          path: '/auth/login',
          Component: Login,
        },

        {
          path: '/auth/register',
          Component: Register,
        }
      ]
    },
    {
      path: '/job/:id',
      Component: JobDetails,
      loader: () => fetch('/data.json')
    },
    {
      path: '/*',
      Component: <h2>Error Layout </h2>
    }

  ]
)

export default router;