const db = require("../models");
const mongoose = require("mongoose");
const moment = require("moment");

module.exports = {
  create: async (req, res) => {
    try {
      const dbModel = await db.Event.create(req.body);
      const createEvent = await db.User.findByIdAndUpdate(dbModel.user, {
        $push: { events: new mongoose.Types.ObjectId(dbModel._id) },
      }).exec();
      res.json(createEvent);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  findAll: async (req, res) => {
    try {
      const findAll = await db.Event.find(req.query);
      res.json(findAll);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  findById: async (req, res) => {
    try {
      const findById = await db.Event.find({ _id: req.params.id });
      res.json(findById);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  findUpcomingByDates: async (req, res) => {
    try {
      const user = await db.User.findOne({ userEmail: req.body.email }).exec();
      const upcomingEvent = await db.Event.find({
        Date: { $in: req.body.dates },
        user: user._id,
      }); 
      upcomingEvent.sort((a,b)=>{
        if (moment(a.Date).isSame(b.Date)){
          return moment(a.Date + " " + a.startTime).isAfter(b.Date + " " + b.startTime) ? 1 : -1;
        }
        return moment(a.Date).isAfter(b.Date) ? 1 : -1;
      })
      res.json(upcomingEvent);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const updateEvent = await db.Event.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.json(updateEvent);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  remove: async (req, res) => {
    try {

      const dbModel = await db.Event.findOneAndRemove({ _id: req.params.id });      
      res.json(dbModel);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
