import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Blog.css'

const Blog = () => {
    return (
        <>
            {[

                'Secondary'
            ].map((variant) => (
                <div>
                    <Card className='qst mb-5' bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>


                        <Card.Header as="h5">Qst: What is cors?</Card.Header>
                        <Card.Body>

                            <Card.Text className='qst mb-3 '>
                                Cross- header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </Card.Text>

                        </Card.Body>
                    </Card>


                    <Card className='mb-5 qst' bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                        <Card.Header as="h5">Qst: Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                        <Card.Body>

                            <Card.Text className='qst mb-3 '>
                                Firebase helps to develop high-quality apps, grow user base. Each feature works independently, and they work even better together.It provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
                                <br></br>
                                <br></br>

                                Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Auth0, MongoDB, Passport, Okta  are the most popular alternatives and competitors to Firebase Authentication.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-5 qst' bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                        <Card.Header as="h5">Qst: How does the private route work?</Card.Header>
                        <Card.Body>

                            <Card.Text className='qst mb-3'>
                                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='mb-5 qst' bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                        <Card.Header as="h5">Qst: What is Node? How does Node work?</Card.Header>
                        <Card.Body>

                            <Card.Text className='qst mb-3 '>
                                As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
                                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend

                                <br></br>
                                <br></br>
                                Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.


                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>
            ))}
        </>
    );
};

export default Blog;