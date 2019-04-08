var mongoose = require("mongoose");

var UserInfoSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    phoneExt: String,
    mobile: String,
    membershipDetails: {
        membership: String,
        memberid: String,
        membersince: {type: Date, default: Date.now},
        lastlogin: {type: Date, default: Date.now}
    },
    loginInfo: {
        username: String,
        password: String
    },
    //now lets make some refs
    billing: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userInfo"
        },
        username: String
    },
    //user has many of these
    Truck: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Truck"
        }
    ],
    Load: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Load"
        }
    ],
});



module.exports = mongoose.model("UserInfoSchema", UserInfoSchema);