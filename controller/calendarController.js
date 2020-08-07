const Event = require("../models/Event");
const User = require("../models/User");

module.exports = {
    create: async (req, res)=>{
        user = req.params;
        id = user.id; // I dont think this line is correct
        const {title, startTime, description, date} = req.body;
        const calendar = await Event.create({
            title,
            startTime,
            description,
            date,
            user:id // I dont think this is 100% accurate
        })

        await calendar.save();

        const userById = await User.findById(id);

        userById.event.push(calendar);

        await userById.save();

        return res.send(userById);
    },
    userByPost: async (req, res)=>{
        const { id } = req.params;
        const userByPost = await await Event.findById(id).populate('user')
        res.send(userByPost)
    }

    // findAll: function(req, res){
    //     db.Calendar
    //         .find(req.query)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err))
    // },
    // findById: function(req, res){
    //     db.Calendar
    //         .find(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err))
    // },
    // create: function(req, res){
    //     db.Calendar
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err))
    // },
    // update: function(req, res){
    //     db.Calendar
    //         .findOneAndUpdate({_id: req.params.id}, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err))
    // },
    // remove: function(req, res){
    //     db.Calendar
    //         .findById({_id: req.params.id})
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err))
    // }
}



