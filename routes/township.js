var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getAllTownship = function (req, res) {
    const query = `SELECT * FROM township`;
  
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

  var getTownshipBySRPCode = function (req, res) {
    let p_code = req.params.srpcode;
    const query = `SELECT * FROM township where SR_PCODE = '${p_code}'`;
  
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

router.get('/', getAllTownship);
router.get('/:srpcode', getTownshipBySRPCode);

module.exports = router;