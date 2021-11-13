import logo from '../logo.PNG';
import '../App.css';
import { Navbar, NavDropdown, NavbarBrand, NavLink, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {
  return (
    <div>
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#"> <img
        src={logo}
        height="50px"
      
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="Nav mx-auto my-2 my-lg-0 text-dark"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">CITIES</Nav.Link>
              <Nav.Link href="#action2">FAQ</Nav.Link>
              <Nav.Link href="#action3">BLOG</Nav.Link>
              <Nav.Link href="#action4">PRESS</Nav.Link>
          
            </Nav>
           
              <Button className="washerBtn text-white">become a washer</Button>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
