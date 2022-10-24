import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (
        <div>
            <h2>Categories:{categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id} >
                        <Link to={`/courseoptions/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default SideBar;