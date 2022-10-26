import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className='mt-4'>
            <h2 className='text-center mb-4'>How do you want to log In?</h2>
            <ButtonGroup vertical className='form-control'>
                <Button className=' mb-2' variant="outline-dark"><Link to='/emailpasslogin' className='linker'><AiOutlineMail></AiOutlineMail> Log in With Email & Password</Link></Button>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in with GitHub</Button>
            </ButtonGroup>

        </div>

    );
};

export default Login;