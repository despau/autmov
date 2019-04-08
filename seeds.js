var mongoose = require("mongoose"),
    Fake     = require("faker"),
    Truck = require("./models/truck"),
    Load = require("./models/load"),
    User        =   require("./models/loginUser");
    

    var data = {
        name: Fake.name.firstName(),
        size: {
                width: Fake.random.number(),
                height: Fake.random.number(),
                weight: Fake.random.number()
        },
        pickDate: Fake.date.future(),
        dropDate: Fake.date.future(),
        origin: {
            address: Fake.address.streetAddress() + Fake.address.streetName(),
            city: Fake.address.city(),
            etat: Fake.address.state(),
            Zip: Fake.address.zipCode()
        },
        Destination: {
            address: Fake.address.streetAddress() + Fake.address.streetName(),
            city: Fake.address.city(),
            etat: Fake.address.state(),
            Zip: Fake.address.zipCode()
        },
        dateCreated:Fake.date.future(),
        requireTeam: false,
        havePiano: false,
        rate: Fake.finance.amount(),
        notes: Fake.lorem.paragraph()
    };
   
    // var data = {
    //     firstname: Fake.name.firstName(),
    //     lastname: Fake.name.lastName(),
    //     email: Fake.internet.email(),
    //     phone: Fake.phone.phoneNumber(),
    //     phoneExt: "000",
    //     mobile: Fake.phone.phoneNumber(),
    //     membershipDetails: {
    //         membership: "Basic",
    //         memberid: Fake.random.uuid(),
    //         membersince: Fake.date.past(),
    //         lastlogin: Fake.date.past()
    //     }
    // };

            function seedDB(){
                // Load.remove({}, (e)=>{
                //     if(e){console.log(e);}
                //     console.log("LOADS REMOVED SUCESSFULLY 3333333333333333333333333333333333333");
                // });
                Load.create(data, (err, load)=>{
                    if(err){
                        console.log(err + "from the create load seed");
                    } else {
                        console.log("new Load created ============: "+ load +"\n");
                    }
                });        //add a few comments
            }

module.exports = seedDB;
