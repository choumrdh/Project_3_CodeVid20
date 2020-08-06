import React from "react";
import { Grid } from '@material-ui/core';
// import Navbar from '../components/NavBar/NavBar'
import Calendar from '../components/Calendar/Calendar'
import SideBar from '../components/SideBar/SideBar';

export default function CalendarPage() {
    return (
        <>

            <Grid container>
                {/* <Navbar />   */}
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={8}>
                    <Calendar />
                </Grid>
            </Grid>

        </>
    )
}