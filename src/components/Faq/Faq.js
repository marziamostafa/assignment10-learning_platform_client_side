import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = () => {
    return (
        <div className='accordion container'>
            <h1 className='text-center mb-4'>Some Frequently asked questions:</h1>
            <Accordion>
                <Accordion.Item eventKey="0" className='bg-secondary'>
                    <Accordion.Header>Qst: What is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross- header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='bg-secondary'>
                    <Accordion.Header>Qst: Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase helps to develop high-quality apps, grow user base. Each feature works independently, and they work even better together.It provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
                        <br></br>
                        <br></br>

                        Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Auth0, MongoDB, Passport, Okta  are the most popular alternatives and competitors to Firebase Authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='bg-secondary'>
                    <Accordion.Header>Qst: How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='bg-secondary'>
                    <Accordion.Header>Qst: What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend

                        <br></br>
                        <br></br>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;