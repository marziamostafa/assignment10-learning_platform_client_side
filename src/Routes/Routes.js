import { createBrowserRouter, Link } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseOptions from "../components/CourseOptions/CourseOptions";
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
                path: '/coursedetails/:id',

                loader: async ({ params }) => {
                    console.log(params.id)
                    return fetch(`https://b610-lerning-platform-server-side-marziamostafa-marziamostafa.vercel.app/courses-categories/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>,
            },
        ]
    },
    { path: '*', element: <div><Error></Error> <Link className='back' to='/home'>Go to home</Link></div> },
])