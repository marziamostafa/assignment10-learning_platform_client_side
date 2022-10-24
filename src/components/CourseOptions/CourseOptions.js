import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const CourseOptions = (category) => {
    console.log(category)
    return (
        <Container>
            <Row>
                <Col lg="9">
                    <h2>eng</h2>
                </Col>
                <Col lg="3">
                    <SideBar></SideBar>
                </Col>
            </Row>
        </Container>

    );
};

export default CourseOptions;