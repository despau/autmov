var express = require("express");
var router = express.Router();
//var Load = require("../models/load");

//show all available loads

router.get("/", (req, res)=>{
    res.render("./carriers/findloads");
});








module.exports = router;