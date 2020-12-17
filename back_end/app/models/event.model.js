const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    name: String,
    description: String    
     
  })
);

module.exports = Event;