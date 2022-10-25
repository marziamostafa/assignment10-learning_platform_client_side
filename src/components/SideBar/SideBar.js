import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-marziamostafa.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (
        <div>
            <h2>Categories:{categories.length}</h2>
            <div className='sidebar'>
                {
                    categories.map(category => <p key={category.id} >
                        <Link className='link' to={`/coursedetails/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default SideBar;