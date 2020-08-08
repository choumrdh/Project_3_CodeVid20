import React from "react";
import { Grid } from '@material-ui/core';
// import Navbar from '../components/NavBar/NavBar'
import Calendar from '../components/Calendar/Calendar'
import SideBar from '../components/SideBar/SideBar';
// import './style.css';

export default function CalendarPage() {
    return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={9}>
                    <Calendar />
                </Grid>
            </Grid>
            <br />
        </>
    )
}