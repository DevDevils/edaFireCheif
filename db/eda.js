var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getMinions,
  isOnsite
}

//get all minions
function getMinions() {
  return knex('edaRegister')
}

//check if onsite
function isOnsite() {
  return knex('edaRegister')
    .select('minons')
    .where('onsite', '=', '1')
}
