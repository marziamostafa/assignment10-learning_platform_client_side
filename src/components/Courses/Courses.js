import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseOptions from '../CourseOptions/CourseOptions';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="9">
                    <CourseOptions></CourseOptions>
                </Col>
                <Col lg="3">
                    <SideBar></SideBar>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;