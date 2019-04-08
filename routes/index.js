var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/loginUser")

 //landing (root route)
 router.get("/", (req, res)=>{
    res.render("./index/dashboard");
});

//===============
//AUTH ROUTES
//==================

//show register form
router.get("/register", function(req, res){
    res.render("./index/register");
});

//handle sign up logic. the post route.
router.post("/register", (req, res)=>{
   var newUser = new User ({username: req.body.username});

    User.register( newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            
            res.redirect("/");
            
        });
    });
});

//show login form
router.get("/login", (req, res)=>{
    res.render("./index/login");
});

//app.post(route, middleware, callback). login form logic & login in
router.post("/login", passport.authenticate("local", {
    successRedirect: "/", failureRedirect: "/login"
}), (req, res)=>{
    res.send("LOGIN LOGIC HAPPEN HERE. THE POST ROUTE!!")
});

//logout route. very short.
router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
});

//middleware to check if a user is logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



module.exports = router;


