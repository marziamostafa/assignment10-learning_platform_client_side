import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Login = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center mb-4'>How do you want to log In?</h2>
            <ButtonGroup vertical className='form-control '>
                <Button className='mb-2' variant="outline-dark"><AiOutlineMail></AiOutlineMail> Log in With Email & Password</Button>
                <Button className='mb-2' variant="outline-dark"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in with GitHub</Button>
            </ButtonGroup>

        </div>

    );
};

export default Login;