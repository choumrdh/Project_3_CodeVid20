const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./user")

router.use("/events", eventRoutes);
router.user("/user", userRoutes)

module.exports = router;