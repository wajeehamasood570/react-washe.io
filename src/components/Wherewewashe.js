import React from 'react'
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import california from '../california.png'
import georgia from '../george.jpg'
import florida from '../florida.png'
import arizona from '../arizona.png'
import newjersy from '../newjersey.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Wherewewashe({title,desc,footer}) {
    return (
        <div className="wherewewashe">
            <div className="titlewasher">
                <h1>
                    WHERE
                    WE WASHÉ
                </h1>
                <p className="titledescwash">
                    Find out if we’re washing near you!
                </p>
            </div>

            <div className="owl-theme">
                {/* <i class="fas fa-arrow-left backbtn"></i> */}
                <Container fluid className="cardslider">

                    <OwlCarousel className='owl-theme'
                        items="4"
                        autoplay
                        loop margin={10}
                        dotsEach>

                        <div class='item'>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={newjersy} />
                                    <Card.Body>
                                        <Card.Title className="cardtitle">
                                            {title}
                                        </Card.Title>
                                        <Card.Text className="cardtext">
                                           {desc}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="cardfooter">
                                            {footer}
                                        </p>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>

                        </div>
                        <div class='item'>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={arizona} />
                                    <Card.Body>
                                        <Card.Title className="cardtitle">arizona</Card.Title>
                                        <Card.Text className="cardtext">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="cardfooter">watch city list</p>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                        <div class='item'>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={california} />
                                    <Card.Body>
                                        <Card.Title className="cardtitle">california</Card.Title>
                                        <Card.Text className="cardtext">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="cardfooter">watch city list</p>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                        <div class='item'>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={florida} />
                                    <Card.Body>
                                        <Card.Title className="cardtitle">florida</Card.Title>
                                        <Card.Text className="cardtext">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="cardfooter">watch city list</p>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                        <div class='item'>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={georgia} />
                                    <Card.Body>
                                        <Card.Title className="cardtitle">georgia</Card.Title>
                                        <Card.Text className="cardtext">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="cardfooter">watch city list</p>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>


                        {/* </div> */}
                    </OwlCarousel>

                </Container>

            </div>
            <div className="buttoncity">
                <Button type="join" className="findcity" >
                    Don't see your city
                </Button>
                <br />

            </div>
        </div>
    )
    }



