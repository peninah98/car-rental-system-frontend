import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import HouseDetails from "../pages/HouseDetails";
import Dashboard from "../dashboard/Dashboard"; 
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "register", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "houses/:id", element: <HouseDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
