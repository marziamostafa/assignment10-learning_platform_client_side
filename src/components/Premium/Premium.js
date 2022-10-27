import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import './Premium.css'
import { AuthContext } from '../../contexts/Authprovider/Authprovider';


const Premium = () => {
    const info = useLoaderData();
    const { user } = useContext(AuthContext)

    const { name, image, instructor, quiz, videos, notes, outcome, id } = info;
    return (

        <Card className="text-center container" style={{ width: '25rem', }}>

            <Card.Header className="text-black header">
                <Card.Img className="image" style={{ height: '40px', width: '40px', borderRadius: '50%' }} variant="top" src={user?.photoURL} />
                <span className='p-0 m-0'>
                    {user?.displayName}
                </span>
            </Card.Header>

            <Card.Img className="pre-image fluid w-100" variant="top" src={image} />

            <Card.Body>
                <Card.Title className='text-dark'>{name}</Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item className='fs-5 semibold'><span className='fw-bold'>User Name:</span> {user?.displayName}</ListGroup.Item>
                <ListGroup.Item className='fs-5'><span className='fw-bold'>User Email:</span> {user?.email}</ListGroup.Item>
                <ListGroup.Item><span className='fw-bold'>Course Status:</span> <span>Successfully purchased</span></ListGroup.Item>
            </ListGroup>
            <Card.Body>

                <Card.Footer className="text-success fs-5"> You got the premium access successsfully</Card.Footer>

            </Card.Body>

        </Card>
    );
};

export default Premium;