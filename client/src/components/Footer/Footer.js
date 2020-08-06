import React from 'react';
import "./Footer.css"
import { AppBar } from "@material-ui/core";

function Footer() {
    return (
        <AppBar position="sticky" style={{ color: "black" }}>
            <footer className="footer">

                <span>
                    <p>Team: CodeVid-20</p>
                    <p>Made By: Nathaniel Darnell, Nicholas Moschouris, Michelle Chou, Tongtong Ding</p>

                </span>

            </footer>
        </AppBar>
    );
};

export default Footer;