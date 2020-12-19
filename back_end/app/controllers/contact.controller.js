     const db = require("../models");
    const Contact = db.contact;
    
    
    // Create and Save a new Event


exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  

    
    
    
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
        });
  
  
    contact.save(contact)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while sending the message."
        });
      });
  };


  

exports.findAll = (req, res) => {
  Contact.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages ."
      });
    });
  
};