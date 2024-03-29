import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.css"

function AdminDashBoard() {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="/"> <h2 className='nav-brand'>Naaga Jewellery</h2></Navbar.Brand>
      </Container>
      <div className='nav-options'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/addproduct"><FontAwesomeIcon icon={faStore} />Add Products</Nav.Link>
            <Nav.Link href="/manageproduct"><FontAwesomeIcon icon={faStore} />Manage Products</Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />}>
              <NavDropdown.Item href="/login">Welcome, Admin</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AdminDashBoard;
