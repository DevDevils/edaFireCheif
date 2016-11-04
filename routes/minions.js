var express = require('express');
var router = express.Router();
var minions = require('../db/eda')
/* GET users listing. */
router.get('/', function(req, res, next) {
  minions.getMinions()
  .then(function(minions){
    console.log(minions);
    res.render('allMinions', {minions})
  })
  .catch(function(err){
    res.status(500)
  })
});

module.exports = router;
