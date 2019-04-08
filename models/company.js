var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
    generaleInfo: {
        companyName: String,
        businessCategory: {
            broker: false,
            carrier: false,
            mover: false,
        },
        websiteUrl: String,
    },
    address:{
        address: String,
        city: String,
        etat: String,
        postalCode: String,
        phone: String,
        tollFree: String,
        fax: String
    }
    
});



module.exports = mongoose.model("CompanySchema", CompanySchema);