import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import './Header.css'
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div >
            <Navbar className='mb-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><h2>  <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top rounded"
                    />Learn Online</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={({ isActive }) => isActive ? 'active' : undefined} href="/home"><h4>Home</h4></Nav.Link>
                            <Nav.Link href="/courses"><h4>Courses</h4></Nav.Link>
                            <Nav.Link href="/blog"><h4>Blog</h4></Nav.Link>
                            <Nav.Link href="/faq"><h4>FAQ</h4></Nav.Link>
                            <Nav.Link href="#toggle"><h4>Toggle</h4></Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link href="#Image" className='m-0 p-0'>
                                {user?.photoURL ?


                                    <Tippy content={
                                        <span className='fw-semibold'> {user?.displayName}</span>}>

                                        <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL} ></Image>

                                    </Tippy>
                                    // <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL} ></Image>
                                    :
                                    <Tippy content={
                                        <span className='fw-semibold'> {user?.displayName}</span>}>
                                        {/* <h1 className=''>  <HiUserCircle className=''></HiUserCircle></h1> */}
                                        <FaUserCircle className='fs-1 me-2'></FaUserCircle>
                                    </Tippy>


                                }
                            </Nav.Link>

                            <Nav.Link className='m-0 p-0' href="#memes">
                                {
                                    user?.uid ?
                                        <>
                                            {/* <span className='p-0 m-0'>
                                                {user?.displayName}
                                            </span> */}

                                            <Button onClick={handleLogOut} variant="outline-secondary ms-1" className=''>Log Out</Button>

                                        </>

                                        :
                                        <>
                                            <Link to='/login'><Button variant="outline-secondary ms-1" className='p-1 m-1'>Log In</Button></Link>
                                        </>
                                }

                            </Nav.Link>
                            {/* 
                            <Button variant="outline-primary ms-1" className='btn-sm p-0'>  <Nav.Link href="/login"><h5 className='p-0 m-0'>Log In</h5></Nav.Link></Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;