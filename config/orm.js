var connection = require("./connection.js");

function makeQuestionMark(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function transToSql(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key + "=" + object[key]);
  }
  return arr.toString();
}


var orm = {
  selectAll: function (table, callback) {
    var query = "select * from " + table + ";";

    connection.query(query, function (err, results) {
      if (err) {
        console.log("error on selectAll");
        throw err;
      }
      callback(results);
    });
  },

  insertOne: function (table, col, val, callback) {
    var query = "insert into " + table + "(" + col.toString() + ") " + "values (" + makeQuestionMark(val.length) + ") ";
    console.log(query);
    connection.query(query, val, function (err, results) {
      if (err) {
        console.log("err on insertOne");
        throw err;
      }
      callback(results);
    });
  },

  updateOne: function (table, objColVal, conditional, callback) {
    var query = "update " + table + " set " + transToSql(objColVal) + " where id = " + conditional;

    console.log(query);

    connection.query(query, function (err, results) {
      if (err) {
        console.log("err on updateOne");
        throw err;
      }
      callback(results);
    });
  }

}

module.exports = orm;