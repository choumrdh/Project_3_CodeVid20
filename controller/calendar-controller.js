const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/calendar", async (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.get("/api/calendar/:id", async (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.get("/api/calendar/event/:id", async (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.post("/api/calendar", (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})