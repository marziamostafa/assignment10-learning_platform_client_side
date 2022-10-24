import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Faq from '../Faq/Faq';

const Header = () => {
    return (
        <div>

            <Link to='/courses'>Courses</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/faq'>FAQ</Link>
            <Button variant="info"><Link to='/login'>Log In</Link></Button>

        </div>
    );
};

export default Header;