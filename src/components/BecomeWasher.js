import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import boss from '../boss.png';
import time from '../time.png';
import paidfast from '../paidfast.png';
import earn from '../earn.png';

export default function BecomeWasher() {
    return (
        <div>
            <Container>
                <h2 className="washerheading">BECOME A
                    WASHÉR</h2>
                <Row className="washercontents">
                    <Col className="washerstyle">
                        <img src={boss} />
                        <h2 className="washertitle">
                            Be your own boss
                        </h2>
                        <h2 className="washerinfo">
                            Operate your own business through Washé. You decide where, when and how much you work.
                        </h2>
                    </Col>


                    <Col className="washerstyle">   <img src={time} />
                        <h2 className="washertitle">
                            Choose your own hours
                        </h2>
                        <h2 className="washerinfo">
                            We’ll only send you job requests when you’re “online.” Your schedule is your call.
                        </h2></Col>


                    <Col className="washerstyle">   <img src={paidfast} />
                        <h2 className="washertitle">
                            Get paid fast
                        </h2>
                        <h2 className="washerinfo">
                            All payments are automatically submitted through the app, and deposited into your bank account. (Tips too!)
                        </h2></Col>


                    <Col className="washerstyle">   <img src={earn} />
                        <h2 className="washertitle">
                            Earn $1,000+ per week*
                        </h2>
                        <h2 className="washerinfo">
                            Washé receives a car wash request approximately every 5 minutes. If you want to work, there will be work!
                        </h2></Col>
                </Row>

                <Button type="join" className="network" >
                                    Join Network
                    </Button>
            </Container>
        </div>
    )
}
