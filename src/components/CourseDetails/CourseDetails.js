import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import './CourseDetails.css'
import { HiUserCircle, HiFaceSmile } from "react-icons/hi2";


const CourseDetails = () => {
    const detail = useLoaderData()
    const { name, image, instructor, quiz, videos, notes, outcome } = detail

    return (
        <div>
            <h1 className="text-center p-3">{name}</h1>
            <div className='details'>


                <Card className="text-center w-100" style={{ width: '35rem' }}>
                    <Card.Img className="image" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Total Videos: {videos}</ListGroup.Item>
                        <ListGroup.Item>Quiz: {quiz}</ListGroup.Item>
                        <ListGroup.Item>Notes: {notes}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Link to='/premium'><Button variant="primary">Premium</Button></Link>
                    </Card.Body>
                </Card>


                <Card className="text-center w-100">
                    <Card.Header className="text-black"><h4><HiUserCircle></HiUserCircle> {instructor}</h4></Card.Header>
                    <Card.Body >
                        <Card.Title className="mt-4 text-black">Details about course:</Card.Title>
                        <Card.Text className="mt-4 text-black">
                            {outcome}
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted">Happy Learning !<HiFaceSmile></HiFaceSmile></Card.Footer>
                </Card>

            </div >
        </div>
    );
};

export default CourseDetails;