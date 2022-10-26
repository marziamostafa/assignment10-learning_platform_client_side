import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseOptions.css'
import { Link } from 'react-router-dom';

const CourseOptions = ({ category }) => {
    const { name, id, image, quiz, videos } = category;
    console.log(name, id);
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img className='photo' variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className='text-black fs-3'>{name}</Card.Title>
                            <Card.Text className='text-black grid justify'>

                                <Row>
                                    <Col><span><span className='fs-5'>Videos: </span>{videos}</span> </Col>
                                    <Col>
                                        <span><span className='fs-5'>Quiz: </span>{quiz}</span>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Link to={`/coursedetails/${id}`} ><Button className='container' variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>

    );
};

export default CourseOptions;