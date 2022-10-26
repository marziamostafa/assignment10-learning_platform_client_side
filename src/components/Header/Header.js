import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'

import './Header.css'
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import { FaUser } from 'react-icons/fa';


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

                            <Nav.Link href="#Image" className=''>
                                {user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL} ></Image>
                                    :
                                    <FaUser className='mt-3'></FaUser>
                                }
                            </Nav.Link>

                            <Nav.Link href="#memes">
                                {
                                    user?.uid ?
                                        <>
                                            <span className='p-0 m-0'>
                                                {user?.displayName}
                                            </span>
                                            {/* <h6 className='p-0 m-0'>
                                              
                                            </h6> */}

                                            <Button onClick={handleLogOut} variant="outline-secondary ms-1" className=''> <h5 className=''>Log Out</h5></Button>

                                        </>

                                        :
                                        <>
                                            <Link to='/login'><Button variant="outline-secondary ms-1" className=''> <h5 className=''>Log In</h5></Button></Link>
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