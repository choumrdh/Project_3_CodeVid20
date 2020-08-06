const router = require("express").Router()
const calendarController = require("../../controller/calendarController")

router.route("/")
  .get(calendarController.findAll)
  .post(calendarController.create);
router.route("/:id")
  .get(calendarController.findById)
  .put(calendarController.update)
  .delete(calendarController.remove);

module.exports = router;