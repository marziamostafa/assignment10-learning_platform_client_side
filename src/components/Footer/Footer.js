import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css'

const Footer = () => {
    return (
        <Card className='text-black bg-secondary mt-2'>
            <Card.Header>About Us</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <div>
                        <h6>Used :</h6>
                        <div className='lists'>
                            <small><li>Firebase</li></small>
                            <small><li>Node js</li></small>
                            <small><li>Express</li></small>
                            <small><li>React Bootstrap</li></small>
                            <small><li>Icons</li></small>
                        </div>
                    </div>
                    <footer className="blockquote-footer mt-1">
                        <small>CopyRight 2015</small>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default Footer;