import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/Mainlayouts";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayouts,
        
    }
])