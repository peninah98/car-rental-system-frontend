import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import SignUp from "../pages/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "houses",
                element: <SignUp />
            },
            {
                path: "*", 
                element: <NotFound />,
            },
        ]
    }
])
    