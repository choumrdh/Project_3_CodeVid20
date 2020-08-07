const User = require("../models/User");

module.exports = {
    create: async (req, res)=>{
        const { userEmail, password, events, userCreated} = req.body; // does events need to be passed here?
        const user = await User.create({
            userEmail,
            password,
            events,
            userCreated
        })
        return res.send(user)
    },
    find: async (req, res)=>{
        const user = await User.find()
        return res.send(user)
    },
    userCalendar: async (req, res)=>{
        const {id} = req.params;
        const user = await User.findById(id).populate('event'); // populate('Event') is in reference to User.js ref "Event" in schema
        res.send(user.events)
    }
};


