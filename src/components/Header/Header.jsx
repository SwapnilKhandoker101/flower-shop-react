import React from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faMagnifyingGlass, faMagnifyingGlassChart, faMagnifyingGlassMinus, faUser } from '@fortawesome/free-solid-svg-icons';
import { ModalTitle } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="nav-bar fs-4 position-relative">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-4"
            style={{ maxHeight: '100px' ,overflowY: 'auto' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='px-4'>Home</Nav.Link>
            
            <Nav.Link href="#action2" className='px-4'>About us </Nav.Link>
            
            <Nav.Link href="#" className='px-4' >Catalogue</Nav.Link>
          </Nav>
          <Navbar.Text className='me-auto my-2 my-lg-0 px-4 fs-3 d-none d-lg-block'>
            Bolosm
          </Navbar.Text>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Nav
            className="ml-auto my-2 my-lg-0 px-4"
            style={{ maxHeight: '100px',overflowY: 'auto'  }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='px-4'><FontAwesomeIcon icon={faMagnifyingGlass}/></Nav.Link>
            
            <Nav.Link href="#action2" className='px-4'><FontAwesomeIcon icon={faHeart}/></Nav.Link>
            
            <Nav.Link href="#" className='px-4' ><FontAwesomeIcon icon={faUser}/></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;