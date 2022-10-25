import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'

import './Header.css'


const Header = () => {
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
                            <Button variant="outline-primary" className='btn-sm p-0'>  <Nav.Link href="/login"><h5 className='p-0 m-0'>Log In</h5></Nav.Link></Button>
                            <Nav.Link href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;