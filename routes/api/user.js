const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/")
  .get(userController.findOneOrCreate)
  .get(userController.all)
  .post(userController.create);

router
  .route("/events/:id")
  .get(userController.eventsByUser)

  router
  .route("/:id")
  .get(userController.find)
module.exports = router;