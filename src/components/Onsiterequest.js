import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function Onsiterequest() {
    return (
        <div>
            <Container >
                <div className="requesttitle">
                    <h2>
                        REQUEST WASHÉ ON-SITE
                    </h2>
                    <h2 >
                        AT YOUR OFFICE OR BUILDING!
                    </h2>
                </div>
                <div className="requestdesc">
                    <h6>
                        Take advantage of special pricing, custom packages, and much more with Washe On-Site, request below.
                    </h6>
                </div>

                {/* form */}
                <div className="onsiteform">
                    <Form className="form">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="name" placeholder="First Name" maxLength="40" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">

                                <Form.Select placeholder="Property Type">
                                    <option>Property Type</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="name" placeholder="Last Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="name" placeholder="City" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="name" placeholder="Country" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="name" placeholder="State" />
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
                </div>
            </Container>
        </div>
    )
}
