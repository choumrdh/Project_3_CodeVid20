const path = require("path");
const router = require("express").Router();
const User = require("../controller/userController");
const Event = require("../controller/calendarController");

router.get("/", (req, res)=> res.send('successful'));

router.post("/user/create", User.create);
router.post("/user/find", User.find);
router.post("/user/find/post/:id", User.userCalendar);

router.post("/post/create/:id", Event.create);
router.post("/post/populate/:id", Event.userByPost);

module.exports = router;