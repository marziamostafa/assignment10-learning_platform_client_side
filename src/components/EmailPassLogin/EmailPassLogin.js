
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import './EmailPassLogin.css';


const EmailPassLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, setLoading, gitLogIn, googleLogin } = useContext(AuthContext);

    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {

        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGitSignIn = () => {

        gitLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='form-input-container'>
            <h2 className='form-title mb-4'>Log In</h2>

            <Form onSubmit={handleSubmit} className='container '>

                <Form.Group className="mb-4 form-input" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4 form-input" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='btn-submit mb-2 container mt-2' variant="secondary" type="submit">
                    Log In
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p className='ps-2 text-dark'><small>New to Learn Online? <Link to='/register'>Create new account</Link></small></p>

            <div className='loader container'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button onClick={handleGitSignIn} variant="outline-dark"><FaGithub></FaGithub> Log in with GitHub</Button>
            </div>
        </div>


    );
};


export default EmailPassLogin;