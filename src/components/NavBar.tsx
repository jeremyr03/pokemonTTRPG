import React from 'react';
import pokeBall from '../images/pokeball.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from "react-bootstrap";

const NavBar = () =>{
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={pokeBall}
                         width="50"
                         height="50"
                         alt=""
                         style={{padding: "5px"}}/>
                    Pokemon TTRPG
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="create">Create Pokemon</Nav.Link>
                    <Nav.Link href="view">Load Pokemon</Nav.Link>
                    <Nav.Link href="rules">Rules</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavBar;