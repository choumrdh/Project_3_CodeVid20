const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Event
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    findById: function(req, res){
        db.Event
            .find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    create: function(req, res){
        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    update: function(req, res){
        db.Event
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    remove: function(req, res){
        db.Event
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    }
}



