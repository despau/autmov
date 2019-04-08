var mongoose = require("mongoose");

var BillingSchema = new mongoose.Schema({
    cardOwner: String,
    cardType: {
        visa: false,
        masterCard: false,
        amex: false,
        discover: false
    },
    expDate: Date,
    securitycode: String,
    address:{
        address: String,
        city: String,
        etat: String,
        country: String
    },
    phone: String,
    email: String
    
});



module.exports = mongoose.model("BillingSchema", BillingSchema);