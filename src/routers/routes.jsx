import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Certificate from "../pages/MyCertificate";
import ProjectDetail from "../pages/ProjectDetail";

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
        path: "/project/:id",
        element: <ProjectDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
    ],
  },
]);
