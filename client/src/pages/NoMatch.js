import React from "react";
import { Grid, Container } from "@material-ui/core";

function NoMatch() {
    return (
        <>
        <Container>

            <Grid item xs={12}>
                <img src="https://cdn.dribbble.com/users/1963449/screenshots/5915645/404_not_found.png" 
                 width = "100%"
                 height = "550"
                />
            </Grid>

        </Container>
        </>
    )
}

export default NoMatch;