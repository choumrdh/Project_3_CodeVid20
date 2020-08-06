import React from "react";
import { Container } from "react-bootstrap";
// import Navbar from "../NavBar/NavBar"

import "./Guest.css";

const Guest = () => {
   
    return (
        <>
        {/* <Navbar /> */}
        <section className="full">
        <Container>
           
            <h1 className="title">CalenDate</h1>
            <p className="description">
                Please login in to access the application
            </p>

            
        </Container>
        </section>
        </>
    );
};

export default Guest;