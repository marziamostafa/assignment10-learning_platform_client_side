import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseOptions.css'
import { Link } from 'react-router-dom';

const CourseOptions = ({ category }) => {
    const { name, id, image } = category;
    console.log(name, id);
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img className='photo' variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to={`/coursedetails/${id}`} ><Button variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>

    );
};

export default CourseOptions;