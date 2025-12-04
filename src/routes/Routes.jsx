import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);