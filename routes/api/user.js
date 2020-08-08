const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/")
  .get(userController.all)
  .post(userController.create);

router
  .route("/:id")
  // .get(userController.find)
  .get(userController.eventsByUser)

module.exports = router;