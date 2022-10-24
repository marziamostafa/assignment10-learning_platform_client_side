import { createBrowserRouter, Link } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import Error from "../components/Error/Error";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    { path: '*', element: <div><Error></Error> <Link className='back' to='/home'>Go to home</Link></div> },
])