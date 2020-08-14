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
                <img style={{ position:"relative", left:"1%" }}
                    src="https://icon-library.com/images/icon-for-calendar/icon-for-calendar-12.jpg"
                    height="40"
                    alt="logo"
                />
                <Tab style={{ color: "black", position:"relative", left:"5%", fontSize:17 }} label="CodeVid-20 : Calendate" className="teamTab"
                href="https://github.com/choumrdh/Project_3_CodeVid20" target="_blank" />
                
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Tabs>
        </AppBar>

    );
};

export default NavBar;