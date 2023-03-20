import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movie Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      </Container>
    </Navbar>
  );
}
