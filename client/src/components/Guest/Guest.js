import React from "react";
import { Container } from "@material-ui/core";


import "./Guest.css";

const Guest = () => {

    return (
        <>
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