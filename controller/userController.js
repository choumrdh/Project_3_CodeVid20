const User = require("../models/User");

module.exports = {
  create: async (req, res) => {
    try {
      let found = await User.findOne({ userEmail: req.body.userEmail });
      if (found) {
        return res.json(found);
      } else {
        let newUser = new User(req.body);
        let savedUser = await newUser.save();
        return res.json(savedUser);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  find: async (req, res) => {
    try {
      let found = await User.findOne({ userEmail: req.body.userEmail });
      res.json(found);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  all: async (req, res) => {
    try {
      let allUsers = await User.find({});
      res.json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  eventsByUser: async (req, res) => {
    try {
      let user = await User.findById(req.params.id).populate("events");
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
