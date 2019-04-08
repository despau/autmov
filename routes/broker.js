var express = require("express");
var router = express.Router();
var Load = require("../models/load");
var Truck = require("../models/truck");

//route for broker to see all loads
router.get("/loads", (req, res)=>{
    //get all loads posted from the db
    Load.find({}, (e, allLoads)=>{
        if(e){console.log(e);}

        res.render("./brokers/displayload", {loads : allLoads});
    });
});

//route for brokers to see the form to post a new load
router.get("/loads/new", (req, res)=>{
    res.render("./brokers/newload");
});



module.exports = router;

   