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
    const query = `
    SELECT 
      SUM(POP_T)Total,
      SUM(POP_M) Male,
      SUM(POP_F) Female,
      SUM(POP_U) Urban,
      SUM(POP_R) Rural,
      SUM(POP_FU) FemaleUrban,
      SUM(POP_MU) MaleUrban,
      SUM(POP_FR) FemaleRural,
      SUM(POP_MR) MaleRural
    FROM cs14_population
    `;
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

  var getTotalPopByTSPCode = function (req, res) {
    let p_code = req.params.tspcode;
    const query = `
    SELECT 
      SUM(POP_T)Total,
      SUM(POP_M) Male,
      SUM(POP_F) Female,
      SUM(POP_U) Urban,
      SUM(POP_R) Rural,
      SUM(POP_FU) FemaleUrban,
      SUM(POP_MU) MaleUrban,
      SUM(POP_FR) FemaleRural,
      SUM(POP_MR) MaleRural
    FROM cs14_population
    WHERE TS_PCODE = '${p_code}'
    `;
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
  
      return res.status(200).send(result);
    });
  };

  var getPopulationWithAge = function (req, res) {
    const query = `
    SELECT 
      SUM(AGE_UNDER1_M+AGE_1_M+AGE_2_M+AGE_3_M+AGE_4_M) '0-4'
      ,SUM(AGE_5_M+AGE_6_M+AGE_7_M+AGE_8_M+AGE_9_M) '5-9'
      ,SUM(AGE_10_M+AGE_11_M+AGE_12_M+AGE_13_M+AGE_14_M) '10-14'
      ,SUM(AGE_15_M+AGE_16_M+AGE_17_M+AGE_18_M+AGE_19_M) '15-19'
      ,SUM(AGE_20_M+AGE_21_M+AGE_22_M+AGE_23_M+AGE_24_M) '20-24'
      ,SUM(AGE_25_M+AGE_26_M+AGE_27_M+AGE_28_M+AGE_29_M) '25-29'
      ,SUM(AGE_30_M+AGE_31_M+AGE_32_M+AGE_33_M+AGE_34_M) '30-34'
      ,SUM(AGE_35_M+AGE_36_M+AGE_37_M+AGE_38_M+AGE_39_M) '35-39'
      ,SUM(AGE_40_M+AGE_41_M+AGE_42_M+AGE_43_M+AGE_44_M) '40-44'
      ,SUM(AGE_45_M+AGE_46_M+AGE_47_M+AGE_48_M+AGE_49_M) '45-49'
      ,SUM(AGE_50_M+AGE_51_M+AGE_52_M+AGE_53_M+AGE_54_M) '50-54'
      ,SUM(AGE_55_M+AGE_56_M+AGE_57_M+AGE_58_M+AGE_59_M) '55-59'
      ,SUM(AGE_60_M+AGE_61_M+AGE_62_M+AGE_63_M+AGE_64_M) '60-64'
      ,SUM(AGE_65_M+AGE_66_M+AGE_67_M+AGE_68_M+AGE_69_M) '65-69'
      ,SUM(AGE_70_M+AGE_71_M+AGE_72_M+AGE_73_M+AGE_74_M) '70-74'
      ,SUM(AGE_75_M+AGE_76_M+AGE_77_M+AGE_78_M+AGE_79_M) '75-79'
      ,SUM(AGE_80_M+AGE_81_M+AGE_82_M+AGE_83_M+AGE_84_M) '80-84'
      ,SUM(AGE_85_M+AGE_86_M+AGE_87_M+AGE_88_M+AGE_89_M) '85-89'
      ,SUM(AGE_OVER90_M) '90+'
    FROM cs14_age;

  SELECT 
    SUM(AGE_UNDER1_F+AGE_1_F+AGE_2_F+AGE_3_F+AGE_4_F) '0-4'
    ,SUM(AGE_5_F+AGE_6_F+AGE_7_F+AGE_8_F+AGE_9_F) '5-9'
    ,SUM(AGE_10_F+AGE_11_F+AGE_12_F+AGE_13_F+AGE_14_F) '10-14'
    ,SUM(AGE_15_F+AGE_16_F+AGE_17_F+AGE_18_F+AGE_19_F) '15-19'
    ,SUM(AGE_20_F+AGE_21_F+AGE_22_F+AGE_23_F+AGE_24_F) '20-24'
    ,SUM(AGE_25_F+AGE_26_F+AGE_27_F+AGE_28_F+AGE_29_F) '25-29'
    ,SUM(AGE_30_F+AGE_31_F+AGE_32_F+AGE_33_F+AGE_34_F) '30-34'
    ,SUM(AGE_35_F+AGE_36_F+AGE_37_F+AGE_38_F+AGE_39_F) '35-39'
    ,SUM(AGE_40_F+AGE_41_F+AGE_42_F+AGE_43_F+AGE_44_F) '40-44'
    ,SUM(AGE_45_F+AGE_46_F+AGE_47_F+AGE_48_F+AGE_49_F) '45-49'
    ,SUM(AGE_50_F+AGE_51_F+AGE_52_F+AGE_53_F+AGE_54_F) '50-54'
    ,SUM(AGE_55_F+AGE_56_F+AGE_57_F+AGE_58_F+AGE_59_F) '55-59'
    ,SUM(AGE_60_F+AGE_61_F+AGE_62_F+AGE_63_F+AGE_64_F) '60-64'
    ,SUM(AGE_65_F+AGE_66_F+AGE_67_F+AGE_68_F+AGE_69_F) '65-69'
    ,SUM(AGE_70_F+AGE_71_F+AGE_72_F+AGE_73_F+AGE_74_F) '70-74'
    ,SUM(AGE_75_F+AGE_76_F+AGE_77_F+AGE_78_F+AGE_79_F) '75-79'
    ,SUM(AGE_80_F+AGE_81_F+AGE_82_F+AGE_83_F+AGE_84_F) '80-84'
    ,SUM(AGE_85_F+AGE_86_F+AGE_87_F+AGE_88_F+AGE_89_F) '85-89'
    ,SUM(AGE_OVER90_F) '90+'
  FROM cs14_age;
    `;
    connection.query(query, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).send(err);
      }
      var dataarray = [];
      var headerArray = ['Age', 'Male', 'Female'];
      var male = result[0][0];
      var maleArray = Object.entries(male);
      var female = result[1][0];
      var femaleArray = Object.entries(female);
      dataarray.push(headerArray);
      for(let i = 0; i < maleArray.length; i++){

        dataarray.push([maleArray[i][0],-maleArray[i][1],femaleArray[i][1]]);
      }
      
      return res.status(200).send(dataarray);
    });
  };

router.get('/', getAllPop);
router.get('/place/:tspcode', getPopByTSPCode);
router.get('/total', getTotalPop);
router.get('/total/:tspcode', getTotalPopByTSPCode);
router.get('/age', getPopulationWithAge);

module.exports = router;