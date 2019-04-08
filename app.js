var express     =   require("express"),
app         =   express(),
bodyParser  =   require("body-parser"),
mongoose    =   require("mongoose"),
passport    =   require("passport"),
LocalStrategy = require("passport-local"),
methodOverride = require("method-override"),
Fake         = require("faker"),
seedDB       = require("./seeds"),
Load         = require("./models/load"),
Truck         = require("./models/truck"),
User        =   require("./models/loginUser");


var indexRoutes = require("./routes/index"),
    carrierRoutes = require("./routes/carrier"),
    brokerRoutes = require("./routes/broker");
//have to add for trucks, companies, loads, etc..

mongoose.connect("mongodb://localhost/autmov-3");
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB(); //seed the database



app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });


app.use(require("express-session")({
    secret: "Rood is ugly so we call him gucci.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//dictate the route paths
app.use("/", indexRoutes);
app.use("/carrier", carrierRoutes);
app.use("/broker", brokerRoutes);

app.listen("3000", "localhost", ()=> {
    console.log("autmov-3 app has started successfully");
});