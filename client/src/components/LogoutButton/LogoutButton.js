import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
        variant="contained" color="secondary" style ={{ position:"relative", left:"10%"}}
            onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </Button>
    );
};

export default LogoutButton;