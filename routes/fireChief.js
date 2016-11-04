var express = require('express')
var router = express.Router()
var minions = require('../db/eda')

module.exports = router

/* GET fireChief page. */
router.get('/', (req, res) => {
  minions.getMinions()
  .then((minions) =>{
    var minionsOnSite = minions.filter(function(minion){
      return minion.onsite === 1
    })
    var minionsOffSite = minions.filter(function(minion){
      return minion.onsite === 0
    })
    res.render('fireChief', {minionsOffSite, minionsOnSite})
  })
  .catch((err) => {
    console.log(err)
  })
})
