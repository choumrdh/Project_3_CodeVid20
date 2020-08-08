import React from "react";
import { Grid } from '@material-ui/core';
import Calendar from '../components/Calendar/Calendar'
import SideBar from '../components/SideBar/SideBar';
import { useAuth0 } from "@auth0/auth0-react";


export default function CalendarPage() {
    const { user } = useAuth0();
    return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <SideBar user={user} />
                </Grid>
                <Grid item xs={9}>
                    <Calendar />
                </Grid>
            </Grid>
            <br />
        </>
    )
}