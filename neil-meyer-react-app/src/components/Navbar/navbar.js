import './navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../logo.svg'

export default function navbar() {
    return (
      <navbar id="navbar">
      <Navbar id="Navbar" fixed="top" className='navbar-expand-md' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='navbar-brand' href="#home">
          <img src={Logo} alt={""} height={50} width={50} className="col-brown"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link  className='hover font-girassol'href="#navbar">Top</Nav.Link>
            <Nav.Link className='hover font-girassol' href="#employees">Employees</Nav.Link>
            <Nav.Link className='hover font-girassol' href="#partners">Partners</Nav.Link>
            <Nav.Link className='hover font-girassol' href="#work">Work</Nav.Link>
            <Nav.Link className='hover font-girassol' href="#contact-us">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </navbar>
      
    )
}
