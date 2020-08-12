import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Calendar from "../components/Calendar/Calendar";
import SideBar from "../components/SideBar/SideBar";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

export default function CalendarPage() {
  const { user } = useAuth0();
  const [userId, setUserId] = useState(0);
  const [submitTime, setSubmitTime] = useState(0);

  useEffect(() => {
    API.createUser({ userEmail: user.email }).then((res) =>
      setUserId(res.data._id)
    );
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <SideBar user={user} submitTime={submitTime} />
        </Grid>
        <Grid item xs={9}>
          <Calendar
            userId={userId}
            setSubmitTime={(timeStamp) => setSubmitTime(timeStamp)}
          />
        </Grid>
      </Grid>
      <br />
    </>
  );
}
