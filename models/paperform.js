var mongoose = require("mongoose");

var PaperFormSchema = new mongoose.Schema({
  authority: {
        carrierNumber: String,
        usdotNumber: String,
        brokerMCNumber: String,
        scacCode: String,
        intrastateNumber: {state: String, number: String}
  },
  documents: []
    
});



module.exports = mongoose.model("PaperFormSchema", PaperFormSchema);