import React from 'react';
import {Typography, Button, Divider} from '@material-ui/core';

const ListItem = () => {
    return (
        <>
            <Typography
                key={i}
                component="h5">
                {event.Date}: {event.startTime}
                <Button
                    size="small"
                    color="primary"
                    id={event._id}
                    onClick={() => handleDelete(event._id)}>
                    Delete
                    </Button>
            </Typography>
            <Typography
                style={{ color: "white" }}
                component="h6">{event.title}
            </Typography>
            <Typography
                gutterBottom
                style={{ color: "white" }}
                variant="body1">
                {event.description}
            </Typography>
            <Divider />
        </>
    )
}

export default ListItem;