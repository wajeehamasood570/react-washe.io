import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../logo1.PNG';
import { BsFacebook} from 'react-icons/bs';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fafacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <Container Fluid>
                <div className="footercontent">
                <Row>
                    <Col><img width="200px" src={logo} /></Col>
                    <Col><div>Address: 101 Plaza Real S Suite 210, Boca Raton,</div>
                        <div> FL 33432</div>
                        <div>
                            Email: info@washe.io</div>
                        <div>
                            Phone: +1 (844) 219 9202</div></Col>
                    <Col><div>Terms Of Use</div>
                        <div>
                            Privacy Policy</div>
                        <div>
                            © Copyright - The Washe App
                        </div>
                    </Col>
                    <Col>
                    <div className="icons">
                    <i class="fab fa-facebook-f "></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    {/* <li className="icons">{BsFacebook}</li> */}
                    </div>
                    {/* <FontAwesomeIcon icon={fafacebook}></FontAwesomeIcon> */}
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}
