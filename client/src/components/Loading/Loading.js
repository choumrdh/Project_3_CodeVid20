import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Loading.css";

const Loading = () => {
    return (
        <CircularProgress animation="border" role="status" className="loading" ></CircularProgress>
    );
};

export default Loading;