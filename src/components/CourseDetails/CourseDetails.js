import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detail = useLoaderData()
    const { name, image, instructor, quiz } = detail

    return (
        <div>
            <div></div>
            <div>
                import Card from 'react-bootstrap/Card';
                import ListGroup from 'react-bootstrap/ListGroup';
            </div>
        </div>
    );
};

export default CourseDetails;