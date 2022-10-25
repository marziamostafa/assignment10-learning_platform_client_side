import React, { useEffect, useState } from 'react';
import CourseOptions from '../CourseOptions/CourseOptions';
import './Course.css'

const Course = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-marziamostafa.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div className='cards'>

            {
                categories.map(category => <CourseOptions key={category.key} category={category}></CourseOptions>)
            }

        </div>
    );
};

export default Course;