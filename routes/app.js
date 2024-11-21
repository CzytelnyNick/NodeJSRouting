const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    // res.send("<h1>Strona główna XD</h1>")
    res.render("home", {title:"Strona glówna"});
})
var user = "";
var userTab = [];
router.get("/add", (req,res) =>{
    res.render("add");

})
router.post("/add", (req, res) => {
    
    
})

router.post("/addFunc", (req,res) =>{
    console.log(req.body["user"]);
    user = req.body["user"];
    // console.log()
    res.redirect("/load")
    // res.end();
})
router.get("/load", (req,res) => {
    console.log(user)
    userTab.push(user)
    res.render("load", {userTab: userTab});
})
module.exports = router;