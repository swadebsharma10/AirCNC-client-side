import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path:'/signup',
        element: <SignUp/>
    }
])


export default router;