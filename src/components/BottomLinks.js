import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import app from '../logo app.png';
import google from '../google.png';


export default function BottomLinks() {
    return (
        <div className="bottomlinks">
            <Container>
                <Row>
                    <Col>
                    <h2 className="linkstitle">
                        DOWNLOAD THE
                    </h2>
                    <h2 className="linkstitle">
                        WASHÉ
                        APP NOW.
                    </h2>
                </Col>
                    <Col xs lg="6" className="app" >
                        <img src={app} />
                    </Col>
                    {/* <Col xs lg="3" className="google">
                        <img src={
                            google} />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
