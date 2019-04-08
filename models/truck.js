var mongoose = require("mongoose");



//SCHEMA SETUP
var truckSchema = new mongoose.Schema({
       name: String,
       size: {
           width: Number,
           height: Number,
           weight: Number
       },
       cubicFeet: Number,
       mph: Number,
       mpg: Number,
       info:{
           year: Date,
           make: String,
           model: String
       },
       owner:{
           type: mongoose.Schema.Types.ObjectId,
           ref: "loginUser"
       },
       teamDriven: false
});

//lets compile this bp into a model ("load name", schemaname)
var Truck = mongoose.model("Truck", truckSchema);
module.exports = Truck;