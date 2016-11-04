var express = require('express')
var router = express.Router()
var minions = require('../db/eda')
var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

/* GET all the minions */
router.get('/', (req, res) => {
  minions.getMinions()
  .then(function(minions){
    console.log(minions)
    res.render('allMinions', {minions})
  })
  .catch(function(err){
    res.status(500)
  })
})

// GET one minion by id
router.get('/edit/:id', function (req, res) {
  var minionId = req.params.id
  // console.log(minionId, 'This is the minion by ID')
  minions.getOneMinion(minionId)
  .then(function (minion) {
    console.log(minion, 'this is the minion')
    updateOnsite(minion)
      res.redirect('/fireChief', {minions})
  })
  .catch(function(err){
    res.status(500)
  })
})

function updateOnsite(minion) {
  return knex('edaRegister')
    .where('onsite', '=', '1')
    .update({
      onsite: '0'
    })
}
// /edit/:id

// get specific minion by id using req.params.id
// check first what minions current onsite status is using an if/else
// update minions onsite status using knex
// res.redirect to /fireCheif

module.exports = router;
