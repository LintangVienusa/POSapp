import React from "react";
import '../Style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LuShoppingCart, LuUser } from "react-icons/lu"

const MainNavbar = () => { 
    return (
        <Navbar variant="dark" className="navBar">
            <Container>
                <Navbar.Brand><h3><b>NOT-A Record Store</b></h3></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Orders</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Gear</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Merchandise</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vinyl</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    {/* <Nav >
                        <Nav.Link>Menu1</Nav.Link>
                        <Nav.Link>Menu2</Nav.Link>
                    </Nav> */}
                    <Nav className="righty">
                        <Nav.Link> <LuShoppingCart size={24} /> </Nav.Link>
                        <Nav.Link> <LuUser size={24} /> </Nav.Link>
                        <Nav.Link href="#memes">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar