import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../context/users/UserContext";

function CustomNavbar() {
  const userCtx = useContext(UserContext);
  const { user, logout, authStatus } = userCtx;

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png"
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
            <Nav.Link as={Link} to="/#interior">Plantas de Interior</Nav.Link>
            <Nav.Link as={Link} to="/#exterior">Plantas de Exterior</Nav.Link>
            <Nav.Link as={Link} to="/#recomendaciones">Recomendaciones</Nav.Link>
            <Nav.Link as={Link} to="/#decoracion">Decoración</Nav.Link>

            {/* 🔑 Opciones dinámicas según login */}
            {authStatus ? (
              <>
                <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">Registro</Nav.Link>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
