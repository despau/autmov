var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var LoginUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    dateCreated: {type: Date, default: Date.now()}
});

//pass the passportLocalMongoose plugin to the User schema
//then u cn model it, then exports it
LoginUserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("LoginUser", LoginUserSchema);