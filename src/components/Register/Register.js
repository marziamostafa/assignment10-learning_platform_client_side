import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='form-input-container'>
            <h2 className='form-title mb-4'>Log In</h2>
            <Form className='container '>
                <Form.Group className="mb-4 form-input" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4 form-input" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='btn-submit mb-2 container mt-2' variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='ps-2'><small>New to Ema-John? <Link to='/register'>Create new account</Link></small></p>
        </div>
    );
};

export default Register;