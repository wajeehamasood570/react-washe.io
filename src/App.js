import logo from './logo.PNG';
import './App.css';
// import { Navbar, NavDropdown, NavbarBrand, NavLink, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi.js';
import Banner from './components/Banner';
import Onsiterequest from './components/Onsiterequest';

import BecomeWasher from './components/BecomeWasher';
import BottomLinks from './components/BottomLinks';
import Footerimg from './components/Footerimg';
import Footer from './components/Footer';
import Wherewewashe from './components/Wherewewashe';
import Howitworks from './components/Howitworks';

function App() {
  return (
    <div >
     <Navi />
     <Banner />
     <Onsiterequest />
     <Howitworks />
     <Wherewewashe title= "new jersey" desc=" This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer." footer="watch city list" />
     <BecomeWasher />
     <BottomLinks />
     <Footerimg />
     <Footer />
    </div>
  );
}

export default App;
