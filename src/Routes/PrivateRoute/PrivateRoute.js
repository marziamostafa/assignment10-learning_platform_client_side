import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    console.log(loading)

    if (loading) {
        return children
    }

    if (user && user.uid) {
        return children;
    };
    return <Navigate to='/emailpasslogin' state={{ from: location }} replace></Navigate>;



};

export default PrivateRoute;