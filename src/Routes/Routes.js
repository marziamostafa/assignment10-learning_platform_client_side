import { createBrowserRouter, Link } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseOptions from "../components/CourseOptions/CourseOptions";
import Courses from "../components/Courses/Courses";
import EmailPassLogin from "../components/EmailPassLogin/EmailPassLogin";
import Error from "../components/Error/Error";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Premium from "../components/Premium/Premium";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path: '/home',
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
            {
                path: '/emailpasslogin',
                element: <EmailPassLogin></EmailPassLogin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium/:id',
                loader: async ({ params }) => {
                    return fetch(`https://b610-lerning-platform-server-side-marziamostafa-marziamostafa.vercel.app/courses-categories/${params.id}`)
                },
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
            },
            {
                path: '/coursedetails/:id',

                loader: async ({ params }) => {
                    return fetch(`https://b610-lerning-platform-server-side-marziamostafa-marziamostafa.vercel.app/courses-categories/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>,
            },
        ]
    },
    { path: '*', element: <Error></Error> },
])