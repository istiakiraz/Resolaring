import { createBrowserRouter, Link } from "react-router";
import MainLayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([

    {
        path:"*",
        element: <div className="text-center py-[120px] ">
           <Link to="/" className="border p-4 "> Go to home page</Link>
        </div>
    },

    {
        path:'/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
        ]
        
    }
])