import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="nav-container">
        <Navbar fixed="top" classname="mr-auto" bg="light" expand="md">
            <Navbar.Brand href="#home">
                <img 
                    src="https://icon-library.com/images/icon-for-calendar/icon-for-calendar-12.jpg"
                    height="40"
                    alt="logo"
                    />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#calender">Calender</Nav.Link>
                
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
        </div>
    );
};

export default NavBar;