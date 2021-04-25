import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import './NaavStyle.scss'
import { Link } from "react-router-dom";


const Naav = () => {
  return (
    <> 
    <Nav className="naav">
      <Container>
        <Navbar expand="lg">
          <Nav.Link
            className="navbar-brand logo ml-5"
            href="/"> Nav-Brand   </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">

              <Link className="nav-text" exact to="/home" activeClassName="active_class">
                Home
              </Link>
              <Link className="nav-text" exact to="/about">
                About
              </Link>
              <Link className="nav-text" exact to="/service">
                Services
              </Link>
              <Link className="nav-text" exact to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      </Nav>
    </>
  );
};


export default Naav;
