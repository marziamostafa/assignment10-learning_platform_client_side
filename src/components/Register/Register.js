import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import './Register.css'


const Register = () => {
    const [error, setError] = useState('')

    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleSubmit = event => {


        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
    return (
        <div className='reg-form-input-container'>
            <h2 className='form-title mb-4'>Sign Up</h2>

            <Form onSubmit={handleSubmit} className='container '>
                <Form.Group className="mb-4 form-input" >
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-4 form-input" >
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-4 form-input" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4 form-input">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='btn-submit mb-2 container mt-2' variant="secondary" type="submit">
                    Sign Up
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p className='ps-2 text-dark'><small>Already have an accaount? <Link to='/emailpasslogin'>Log In</Link></small></p>
        </div>
    );
};

export default Register;