const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    
     
  })
);
module.exports = Event;