import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo2.jpg";
const NavBar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "white" }} expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="100" alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <h3 style={{ color: "lightpink", marginBottom: -30, fontSize: 23 }}>
              BANGLADESH{" "}
            </h3>{" "}
            <br />{" "}
            <h4 style={{ marginTop: 0, color: "lightpink", fontSize: 21 }}>
              {" "}
              STORE
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mx-auto">
              <Nav className="me-auto ">
                <Nav.Link className="px-3 text-black" href="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  className="px-3  text-black"
                  title="Jwellery"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/gold">Gold</NavDropdown.Item>
                  <NavDropdown.Item href="/silver">Silver</NavDropdown.Item>
                  <NavDropdown.Item href="/diamonds">Diamond</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="px-3  text-black"
                  title="Jwellery Accessories"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/JwelleryBox">
                    Jwellery Box
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/jwellerybag">
                    Jwellery Bag
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/jwellerymachine">
                    Jwellery Machines
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/menufactureitem">
                    Menufacturing Item
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link className="px-3  text-black" href="/ourservice">
                  Our Service
                </Nav.Link>
                <Nav.Link className="px-3  text-black" href="/home#contact">
                  Contact
                </Nav.Link>
                <Nav.Link className="px-3  text-black" href="/home#aboutus">
                  About Us
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
