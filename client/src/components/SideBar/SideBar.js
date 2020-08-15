import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Typography, Divider } from '@material-ui/core';
import './style.css';
import { format } from "date-fns";
import API from "../../utils/API";
import ListItem from '../ListItem/ListItem'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: "#8FB9A8"
  },
});

export default function SideBar({ user, submitTime }) {
  const classes = useStyles();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  const getUpcomingDates = (dayCount) => {
    const today = new Date().getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const upcomingDates = [format(new Date(), "P")];
    for (let i = 1; i < dayCount; i++) {
      upcomingDates.push(format(new Date(today + oneDay * i), "P"));
    }
    return upcomingDates;
  }

  useEffect(() => {
    API.getUpcomingEventsByDates(getUpcomingDates(5), user.email)
      .then(events => { setUpcomingEvents(events.data) })
  }, [submitTime, forceUpdate])

  const handleDelete = id => {
    API.deleteEvent(id)
      .then(() => { setForceUpdate(!forceUpdate) })
      .catch(err => console.log(err))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div style={{ 
            color: "white", 
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2">
              Hello, {user.nickname}
              <img
                src={user.picture}
                className="profile"
                style={{ 
                  width: "30px" 
                }}
                alt="profile"></img>
            </Typography>
            <Typography
              style={{ 
                fontWeight: "bold", 
                color: "white" 
              }}
              component="h3">
              Schedule your events with CalenDate!
              </Typography>
            <Typography
              style={{ 
                fontWeight: "bold", 
                color: "white", 
                paddingBottom: "10px" 
              }}
              component="h5">
              Click the date you need to schedule an event and enter the details
              </Typography>
            <Divider />
            {
              upcomingEvents.map((event, i) => {
                return(
                <ListItem
                  i={i}
                  Date={event.Date}
                  startTime={event.startTime}
                  id={event._id}
                  handleDelete={() => handleDelete(event._id)}
                  title={event.title}
                  description={event.description}
                />)
              })}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}