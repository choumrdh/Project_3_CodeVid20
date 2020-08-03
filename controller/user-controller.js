const express = require("express");
const passport = require("passport")
const router = express.Router();
const db = require("../models");

// need to double check this
// require("../config/passport")("passport");
// router.use(passport.initialize());
// router.use(passport.session());

router.get("/calendar", async (req, res) => {
    try {
        if (req.user) {
            // need to find user and return calendar data
        }
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

// I think this needs a passport.authenticate equivalent for Auth0
router.get("/api/users", async (req, res) => {
    try {
        // findAll equivalent goes here
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.get("/api/users/:id", async (req, res) => {
    try {
        // findAll where id: req.params.id equivalent goes here
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

// I think this needs a passport.authenticate equivalent for Auth0
router.post("/api/users", async (req, res) => {
    // db.user.create equivalent goes here
})


// I think this needs a passport.authenticate equivalent for Auth0
router.delete("/api/users/:id", async (req, res) => {
    // db.user.destroy equivalent goes here
})


