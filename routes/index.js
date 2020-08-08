const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);


// need to check where the build folder is
router.use(function(req, res) {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  console.log("user api?")
});

module.exports = router;