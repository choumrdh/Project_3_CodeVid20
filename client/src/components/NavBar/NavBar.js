import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    const { isAuthenticated } = useAuth0();

    return (

        <AppBar position="sticky" style={{ background: "#dedddc", height: "80px" }}>
            <Tabs>
                <img
                    src="https://icon-library.com/images/icon-for-calendar/icon-for-calendar-12.jpg"
                    height="40"
                    alt="logo"
                />
                <Tab style={{ color: "black" }} label="home" href="#home" />

                <Tab style={{ color: "black" }} label="calendar" href="#calender" />
                
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Tabs>
        </AppBar>

    );
};

export default NavBar;