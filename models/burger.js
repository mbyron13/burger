var orm = require("../config/orm.js");

var burger = {
 selectAll: function(callback) {
   orm.selectAll("burgers", function(res){
     callback(res);
   });
 },

 insertOne: function(col, callback){
   orm.insertOne("burgers",["burger_name","devoured"],[col, false], callback);
 },


 updateOne: function(objColVal, conditional, callback){
  orm.updateOne("burgers",objColVal,conditional,function(res){
    callback(res);
  });
}

};

module.exports = burger;