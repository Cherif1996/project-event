const db = require("../models");
const Event = db.event;

// Create and Save a new Event
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a event
    const event = new Event({
      name: req.body.name,
      description: req.body.description
        });
  
    // Save event in the database
    event.save(event)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the event."
        });
      });
  };

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
    Event.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  
};

