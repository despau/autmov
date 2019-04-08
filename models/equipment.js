var mongoose = require("mongoose");

var EquipmentSchema = new mongoose.Schema({
    typeAndqty: {
        loadRamp: Number,
        liftGate: Number,
        straightTruck: Number,
        tractorTrailer: Number
    },

    truckSize: Number,
    cubicFeet: Number,
    areaServed: [],
    note:String
    
});



module.exports = mongoose.model("EquipmentSchema", EquipmentSchema);