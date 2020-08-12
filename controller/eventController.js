const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findAll: function (req, res) {
    db.Event.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(500).json(err));
  },

  findById: function (req, res) {
    db.Event.find({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(500).json(err));
  },

  findUpcomingByDates: async function (req, res) {
    try {
      const user = await db.User.findOne({ userEmail: req.body.email }).exec();
      const upcomingEvent = await db.Event.find({
        Date: { $in: req.body.dates },
        user: user._id,
      });
      res.json(upcomingEvent);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  create: function (req, res) {
    db.Event.create(req.body)
      .then((dbModel) => {
        db.User.findByIdAndUpdate(dbModel.user, {
          $push: { events: new mongoose.Types.ObjectId(dbModel._id) },
        }).exec();

        return dbModel;
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(500).json(err));
  },
  update: function (req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(500).json(err));
  },
  remove: function (req, res) {
    db.Event.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(500).json(err));
  },
};
