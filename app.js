const PORT = 3000||process.env.PORT

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("resume")
})


app.listen(PORT, function(req,res){
    console.log("app is listening on " + PORT);
})