
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';
import './Courses.css'

const Courses = () => {
    return (
        <Container>
            <Row className='courses'>
                <Col lg="9" className='course'>
                    <Course></Course>
                </Col>
                <Col lg="3">
                    <SideBar></SideBar>
                </Col>

            </Row>
        </Container>
    );
};

export default Courses;