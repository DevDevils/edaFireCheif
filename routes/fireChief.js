var express = require('express')
var router = express.Router()
var minions = require('../db/eda')

module.exports = router

/* GET fireChief page. */
router.get('/', (req, res) => {
  minions.isOnsite()
    .then((minonsOnSite) => {
      console.log(minonsOnSite);
      res.render('fireChief', { name: 'minonsOnSite' })
    })
    .catch((err) => {
      console.log(err)
    })
})
