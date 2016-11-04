var express = require('express')
var router = express.Router()
var minions = require('../db/eda')

module.exports = router

/* GET fireChief page. */
router.get('/', (req, res) => {
  minions.isOnsite()
    .then((minionsOnSite) => {
      console.log('minionsOnSite', minionsOnSite)
      res.render('fireChief', {minionsOnSite: minionsOnSite})
    })
    .catch((err) => {
      console.log(err)
    })
})
