var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data){
    res.render("index", {burger_obj: data});
  });
});

router.post("/burgers/create", function(req, res){
  burger.insertOne(req.body.burgername,function(data){
    console.log(data);
    res.redirect("/burgers");
  });
});

router.put("/burgers/:id", function(req, res) {
  console.log("req : " + JSON.stringify(req.query));
  console.log("request params: " + JSON.stringify(req.params));
  console.log("----------------------");
  console.log("req params devoured: " + req.params.devoured);
  burger.updateOne({devoured: req.query.devoured}, req.params.id, function(data) {
    console.log(data);
    res.sendStatus(200);
  });
});



module.exports = router;
