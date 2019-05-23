var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getAllPop = function (req, res) {
    const query = `SELECT * FROM cs14_population`;
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

  var getPopByTSPCode = function (req, res) {
    
    let p_code = req.params.tspcode;
    const query = `SELECT * FROM cs14_population where TS_PCODE = '${p_code}'`;
  
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

  var getTotalPop = function (req, res) {
    const query = `SELECT * FROM cs14_population`;
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

router.get('/', getAllPop);
router.get('/:tspcode', getPopByTSPCode);
router.get('/totals', getTotalPop);

module.exports = router;