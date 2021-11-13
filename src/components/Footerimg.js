import React from 'react'
import { Container } from 'react-bootstrap'
import city from '../city.png';

export default function Footerimg() {
    return (
        
            <Container fluid>
               
               <div className="textfooter"> <p>
                    *Actual earning may vary depending on time of day, location, and other factors. Any testimonials, examples, or stated earnings are in no way representations or guarantee of a subcontractor earning potential. Subcontractors should consult their business advisor(s).
                </p>
                </div>
                <img src={city} className="footerimg"/>
                
            </Container>
        
    )
}
