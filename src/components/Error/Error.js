import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <Card style={{ width: '35rem', height: '20rem' }} className='container mt-5'>
            <Card.Img style={{ width: '35rem', height: '20rem' }} variant="top" src="https://www.intuitivecare.net/wp-content/uploads/2022/03/pc-error-icon-teal.svg" />
            <Card.Body>
                <Card.Title>Could Not Find That Page</Card.Title>
                <Card.Text >
                    <h1>Error</h1>
                </Card.Text>
                <Link to='/home'><Button variant="primary">Go back to home</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Error;