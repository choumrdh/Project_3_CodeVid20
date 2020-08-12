const User = require("../models/User");

module.exports = {
  create: async (req, res) => {
    let found = await User.findOne({ userEmail: req.body.userEmail });
    if (found) {
      return res.json(found);
    } else {
      let newUser = new User(req.body);
      let savedUser = await newUser.save();
      return res.json(savedUser);
    }
  },
  find: async (req, res) => {
    let found = await User.findOne({ userEmail: req.body.userEmail }); // is this find() correct?
    res.json(found);
  },
  all: async (req, res) => {
    let allUsers = await User.find({});
    res.json(allUsers);
  },
  eventsByUser: async (req, res) => {
    // const {_id} = req.params;
    // console.log({_id})
    // console.log(req.params.id)
    const user = await User.findById(req.params.id).populate("events"); // populate('Event') is in reference to User.js ref "Event" in schema
    res.json(user);
  },
};
