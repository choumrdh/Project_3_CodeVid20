import React from "react";
import Guest from "../Guest/Guest";
import CalendarPage from "../../pages/CalendarPage"
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <CalendarPage /> : <Guest />}
        </>
    );
};

export default Home;