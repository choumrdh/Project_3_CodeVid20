import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Grid, TextField, Box, Button, Typography, Backdrop, Fade } from '@material-ui/core';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const theme = {
  spacing: 8,
}

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container>
        <Typography component="h5">What's the plan for {props.date}?</Typography>
        <Grid item xs={12}>
          <Box mb={2}>
            <TextField className={classes.root}
              id="outlined-basic"
              onChange={props.handleChange}
              value={props.state.event}
              name="event"
              label="Event"
              variant="outlined"
              fullWidth={true} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <TextField className={classes.root}
              onChange={props.handleChange}
              value={props.state.description}
              name="description"
              id="outlined-multiline-flexible"
              multiline rowsMax={4}
              label="Description"
              variant="outlined"
              fullWidth={true} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <TextField
              onChange={props.handleChange}
              value={props.state.time}
              type="time"
              name="time"
              id="time"
              label="Time"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }} />
          </Box>
        </Grid>
        <Grid>
          <Box mb={2}>
            <Button
              onClick={props.handleSubmit}
              variant="contained">
              Submit
            </Button>
            <Button
              onClick={props.handleClose}
              variant="contained">
              Close
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          {body}
        </Fade>
      </Modal>
    </div>
  );
}
