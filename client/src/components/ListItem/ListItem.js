import React from 'react';
import {Typography, Button, Divider} from '@material-ui/core';

const ListItem = (props) => {
    return (
        <>
            <Typography
                key={props.i}
                component="h5">
                {props.Date} at {props.startTime}
            </Typography>
            <Typography
                style={{ 
                    color: "white" 
                }}
                component="h6">{props.title}
            </Typography>
            <Typography
                // gutterBottom
                style={{ 
                    color: "white", 
                    // paddingBottom: "10px" 
                }}
                variant="body1">
                {props.description}
            </Typography>
            <Button
                    size="small"
                    color="primary"
                    id={props._id}
                    style={{
                        display:"block",
                        marginLeft: "auto"                       
                    }}
                    onClick={() => props.handleDelete(props.id)}>
                    Delete
                    </Button>
            <Divider />
        </>
    )
}

export default ListItem;