import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/homepage.webp'
import logo2 from '../../assets/home2.jpg'
import logo4 from '../../assets/home4.jpg'

import './Home.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Carousel fade className='home'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
                <Carousel.Caption className=' mb-5'>
                    <p className='text-secondary h3'>People get skilled by learning and aquiring knowledge. Let's take the initiative of the journey to be a skilled one.</p>
                    <Link to='/courses'> <Button>Get Started</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={logo2}
                    alt="Second slide"
                />

                <Carousel.Caption className=' mb-5'>
                    <p className='text-black h3'>People get skilled by learning and aquiring knowledge. Let's take the initiative of the journey to be a skilled one.</p>
                    <Link to='/courses'> <Button>Get Started</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Third slide"
                />

                <Carousel.Caption className=' mb-5'>
                    <p className='text-black h3'>
                        People get skilled by learning and aquiring knowledge. Let's take the initiative of the journey to be a skilled one.
                    </p>
                    <Link to='/courses'> <Button>Get Started</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;