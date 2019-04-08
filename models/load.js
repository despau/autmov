var mongoose = require("mongoose");

var LoadSchema = new mongoose.Schema({
    name: String,
    size: {width: Number, height: Number, weight: Number},
    pickDate: {type: Date, default: Date.now},
    dropDate: {type: Date, default: Date.now},
    origin: {city: String, etat: String, Zip: String},
    destination:  {city: String, etat: String, Zip: String}, 
    dateCreated: {type: Date, default: Date.now},
    requireTeam: false,
    rate: Number,
    notes: String,
    havePiano: false,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userInfo"
        },
        username: String
    }
});



module.exports = mongoose.model("Load", LoadSchema);