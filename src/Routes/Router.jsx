import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import SkillDetailsPage from "../Pages/SkillDetailsPage";
import PrivateRoute from '../Provider/PrivateRoute'
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const skills = await fetch('/skills.json').then(res => res.json());
          const providers = await fetch('/providers.json').then(res => res.json());
          return { skills, providers };
        },
        hydrateFallbackElement: <Loading />
      },
      {
        path: '/skills-details/:id',
        element: <PrivateRoute>
          <SkillDetailsPage />
        </PrivateRoute>,
        loader: () => fetch('/skills.json'),
        hydrateFallbackElement: <Loading />
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>
      },
      {
        path:'/forgot-password',
        Component: ForgotPassword
      }
    ]
  }
]);

export default router;