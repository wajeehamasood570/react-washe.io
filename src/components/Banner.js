import React from 'react'
import '../App.css';
import call from '../call_icon.png';
import appstore from '../appstore.PNG';
import googleplay from '../googleplay.PNG';
import kara from '../car2.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function Banner() {
    return (
        <div className="banner">
            <Container >
                <Row>
                    <Col>
                        <h1>
                            car washes delievered
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12} xs={12} lg={10}>
                        <img src={kara} width="130%" height="700px" className="bannerimg"/>
                    </Col>
                    <Col md={3} className="sidebar">


                        <Form className="formsite">
                            <Row >
                                <Col className="call">
                                    <img src={call} />
                                </Col>
                                <Col className="calldesc">
                                    <h3>ORDER A
                                        WASHÉ</h3>
                                </Col>
                            </Row>

                            <Row className="images">
                                <Col>
                                    <img src={appstore} />
                                </Col>

                                <Col>
                                    <img src={googleplay} />
                                </Col>
                            </Row>

                            <hr className="hr" />
                            <Row className="sidedesc">
                                <h4>
                                    full detail request
                                </h4>
                                <div>
                                    Request An Elite Detail Below!
                                </div>
                                <div>
                                    Our representative will contact you today
                                    to schedule a custom detailing of your vehicle.
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="name" placeholder="First Name" maxLength={90} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="name" placeholder="Last Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNumber">

                                    <Form.Control type="number" placeholder="Phone Number" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">

                                    <Form.Control type="city" placeholder="City" />
                                </Form.Group>
                            </Row>

                            <Row className="state mb-3">
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Select placeholder="State">
                                        <option>State</option>
                                        <option>Alabama</option>
                                        <option> Alaska</option>
                                        <option> Arizona</option>
                                        <option>  Arkansas</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                        <option> Connecticut</option>
                                        <option> Delaware</option>
                                        <option>Florida</option>
                                        <option> Georgia</option>
                                        {/* Hawaii
                                        Idaho
                                        Illinois
                                        Indiana
                                        Iowa
                                        Kansas
                                        Kentucky
                                        Louisiana
                                        Maine
                                        Maryland
                                        Massachusetts
                                        Michigan
                                        Minnesota
                                        Mississippi
                                        Missouri
                                        Montana
                                        Nebraska
                                        Nevada
                                        New Hampshire
                                        New Jersey
                                        New Mexico
                                        New York
                                        North Carolina
                                        North Dakota
                                        Ohio
                                        Oklahoma
                                        Oregon
                                        Pennsylvania
                                        Rhode Island
                                        South Carolina
                                        South Dakota
                                        Tennessee
                                        Texas
                                        Utah
                                        Vermont
                                        Virginia
                                        Washington
                                        West Virginia */}

                                        <option>Wyoming</option>
                                        <option>  Wisconsin</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="button mb-3">
                                <Col >
                                    <Button variant="primary" type="submit" >
                                        Submit
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="reset" >
                                        Reset
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
