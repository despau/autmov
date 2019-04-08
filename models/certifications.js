var mongoose = require("mongoose");

// Owner Operator Independent Drivers Association (OOIDA)
// American Trucking Associations (ATA)
// Truckload Carriers Association (TCA)
// Transportation Intermediaries Association (TIA)
// TIA Performance Certified (P3)

// Security Threat Assessments (TSA)?
// Biohazard Training?
// Hazmat Certification?
// International Shipping Experience?
// ISO 9000 Certified?

var CertificationSchema = new mongoose.Schema({
    companyassociation: {
        ooida: false,
        ata: false,
        tca: false,
        tia: false,
        p3: false
    },

    companycertification: {
        tsa: false,
        biotraining: false,
        hazmat: false,
        shippingexperience: false,
        isocertified: false
    }
    
});



module.exports = mongoose.model("CertificationSchema", CertificationSchema);