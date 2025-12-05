import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>, 
      },
    ],
  },
]);