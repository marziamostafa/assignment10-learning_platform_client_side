import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = () => {
    return (
        <div className='accordion container'>
            <h1 className='text-center mb-4'>Some Frequently asked questions:</h1>
            <Accordion>
                <Accordion.Item eventKey="0" className='bg-secondary'>
                    <Accordion.Header>Qst: How long the courses will be going on?</Accordion.Header>
                    <Accordion.Body>
                        It depens on according to the differences of that course you are doing and depend on the number of videos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='bg-secondary'>
                    <Accordion.Header>Qst:What if I do face any type of problem while doing a course?</Accordion.Header>
                    <Accordion.Body>
                        There will be support session for the laerners where we will help them to solve their problem.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='bg-secondary'>
                    <Accordion.Header>Qst: What if I have any question based on the topic?</Accordion.Header>
                    <Accordion.Body>
                        We will provide conceptual hours where you will be able to ask your questions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='bg-secondary'>
                    <Accordion.Header>Qst:What are the basic elements or gadgetts we will be needed for that course?</Accordion.Header>
                    <Accordion.Body>
                        There will be an orentiation for each courses. We will give instructions there abouu it.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;