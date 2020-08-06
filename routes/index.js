const path = require("path");
const router = require("express").Router();
const API = require("./api");

router.use("/api", API);

// need to make sure the build location is correct when created
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;