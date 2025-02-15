import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
