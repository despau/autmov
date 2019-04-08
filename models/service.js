var mongoose = require("mongoose");

var ServiceSchema = new mongoose.Schema({
        airRide: false,
        blanketWrap: false,
        containers: false,
        distribution: false,
        timesensitive: false,
        oversize: false,
        overweight: false,
        transport: false,
        paddedvan: false,
        bulktransport: false,
        logistic: false,
        retail: false
    
});



module.exports = mongoose.model("ServiceSchema", ServiceSchema);