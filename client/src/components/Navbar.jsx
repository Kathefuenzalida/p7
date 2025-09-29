import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/logo.png" // tu logo en la carpeta public/logo
            alt="Botanic Soul Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">Botanic Soul</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#interior">Plantas de Interior</Nav.Link>
            <Nav.Link href="#exterior">Plantas de Exterior</Nav.Link>
            <Nav.Link href="#recomendaciones">Recomendaciones</Nav.Link>
            <Nav.Link href="#decoracion">Decoración</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
