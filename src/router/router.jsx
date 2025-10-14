import { createBrowserRouter, Link } from "react-router";
import MainLayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home/Home";
import WhyResolaring from "../pages/WhyResolaringPage/WhyResolaring";
import RecyclingProcess from "../pages/RecyclingProcessPage/RecyclingProcess";
import Marketplace from "../pages/ProductPages/Marketplace";
import AuthLayouts from "../layouts/AuthLayouts";
import ChooseAccount from "../pages/AuthPages/ChooseAccount";
import LogIn from "../pages/AuthPages/LogIn";
import ForgotPass from "../pages/AuthPages/ForgotPass";
import Verification from "../pages/AuthPages/Verification";
import NewPass from "../pages/AuthPages/NewPass";
import SignUp from "../pages/AuthPages/SignUp";

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
            {
                path: 'why-resolaring',
                Component: WhyResolaring
            },
            {
                path: 'recycling-process',
                Component: RecyclingProcess
            },
            {
                path: 'marketplace',
                Component: Marketplace
            },

        ]
        
    },
    
    {
        path: '/auth',
        Component: AuthLayouts,
        children:[
            {
                path: "choose-account",
                Component: ChooseAccount,
            },
            {
                path:'log-in',
                Component: LogIn
            },
            {
                path:'forgot-pass',
                Component: ForgotPass
            },
            {
                path:'verification',
                Component: Verification
            },
            {
                path:'set-new-pass',
                Component: NewPass
            },
            {
                path:'sign-up',
                Component: SignUp
            },
        ]

        
    }
])