import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { RoleProvider } from "./context/RoleContext";

export default function App() {
    return (
        <RoleProvider>
            <RouterProvider router={routes} />
        </RoleProvider>
    );
}