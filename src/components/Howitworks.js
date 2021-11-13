import React from 'react'
import { Container, Card, CardGroup, Button, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import mb2 from '../mb2.png'
import mb from '../1mb.png';
import mb3 from '../mb3.png'
import mb4 from '../mb4.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Howitworks() {
    return (

        <Container>
            <div className="howitworks">
                {/* <i class="fas fa-arrow-left backbtn"></i> */}

                <OwlCarousel
                    items="1"
                    autoplay
                    loop margin={10}
                    dotsEach>
                    <div class='item'>
                        <Row>
                            <Col className="partone">
                                <div className="worktitle">
                                    <h2 className="titleone">
                                        how it
                                    </h2>
                                    <h2 className="titletwo">
                                        works
                                    </h2>

                                    <h4 className="pkg">
                                        1. Choose a package
                                    </h4>

                                    <h6 className="pkgdesc">
                                        Select an exterior,Interior,Mini<br />
                                        Detail or Ful detail service.
                                    </h6>
                                  
                                        <Button className="orderbutton"  >
                                            order now
                                        </Button>
                                 
                                </div>


                            </Col>

                            <Col className="parttwo">
                                <img src={mb} className="mb" />
                            </Col>


                        </Row>
                    </div>


                    <div class='item'>
                        <Row>
                            <Col className="partone">
                                <div className="worktitle">
                                    <h2 className="titleone">
                                        how it
                                    </h2>
                                    <h2 className="titletwo">
                                        works
                                    </h2>

                                    <h4 className="pkg">
                                       2. Washer on the way
                                    </h4>

                                    <h6 className="pkgdesc">
                                        Select an exterior,Interior,Mini<br />
                                        Detail or Ful detail service.
                                    </h6>
                                   
                                        <Button className="orderbutton"  >
                                           Order now
                                        </Button>
                                    
                                </div>
                            </Col>

                            <Col className="parttwo">
                                <img src={mb2} className="mb" />
                            </Col>


                        </Row>
                    </div>



                    <div class='item'>
                        <Row>
                            <Col className="partone">
                                <div className="worktitle">
                                    <h2 className="titleone">
                                        how it
                                    </h2>
                                    <h2 className="titletwo">
                                        works
                                    </h2>

                                    <h4 className="pkg">
                                       3. Washe in progress
                                    </h4>

                                    <h6 className="pkgdesc">
                                        Select an exterior,Interior,Mini<br />
                                        Detail or Ful detail service.
                                    </h6>

                                   
                                        <Button className="orderbutton" >
                                            order now
                                        </Button>
                                  
                                </div>
                            </Col>

                            <Col className="parttwo">
                                <img src={mb3} className="mb" />
                            </Col>

                        
                        </Row>
                    </div>


                    <div class='item'>
                        <Row>
                            <Col className="partone">
                                <div className="worktitle">
                                    <h2 className="titleone">
                                        how it
                                    </h2>
                                    <h2 className="titletwo">
                                        works
                                    </h2>

                                    <h4 className="pkg">
                                       4. Washe Complete
                                    </h4>

                                    <h6 className="pkgdesc">
                                        Select an exterior,Interior,Mini<br />
                                        Detail or Ful detail service.
                                    </h6>

                                   
                                        <Button className="orderbutton">
                                            order now
                                        </Button>
                                  
                                </div>
                            </Col>

                            <Col className="parttwo">
                                <img src={mb4} className="mb" />
                            </Col>

                        
                        </Row>
                    </div>
                </OwlCarousel>
            </div>
        </Container>

    )
}
