import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';
import { format } from "date-fns";
import API from "../../utils/API";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

export default function SideBar({ user, submitTime }) {
  const classes = useStyles();

  const [upcomingEvents, setUpcomingEvents] = useState([]);


  const getUpcomingDates = (dayCount) => {
    const today = new Date().getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const upcomingDates = [format(new Date(), "P")];
    for (let i = 1; i < dayCount; i++) {
      upcomingDates.push(format(new Date(today + oneDay * i), "P"));
    }
    return upcomingDates;
  }

  console.log(getUpcomingDates(5));

  useEffect(() => {
    console.log("update.....")
    API.getUpcomingEventsByDates(getUpcomingDates(5))
      .then(events => { setUpcomingEvents(events.data) })
  },[submitTime])



  return (
    <div id='sidebar'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hello, {user.nickname} <img src={user.picture} className="profile" style={{ width: "30px" }} alt="profile"></img>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul>
                {
                  upcomingEvents.map((event, i)=>{
                  return (<><h5 key={i}>{event.Date} {event.startTime}</h5>
                          <h6>{event.title}</h6>
                          <p>{event.description}</p></>)
                  })
                }
              </ul>
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* {/* <Button size="small" color="primary">
          Share
        </Button> */}
          {/* <Button size="small" color="primary">
          Delete
        </Button>  */}
        </CardActions>
      </Card>
    </div >
  );
}