var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getMinions,
  isOnsite,
  getOneMinion
}

//get all minions
function getMinions() {
  return knex('edaRegister')
}

//check if onsite
function isOnsite() {
  return knex('edaRegister')
    .select()
    .where('onsite', '=', '1')
}

function getOneMinion(id) {
  return knex('edaRegister')
    .select()
    .where('id', '=', id)
}

//check if offsite
function isOffsite() {
  return knex('edaRegister')
    .select('minions')
    .where('onsite', '=', "0")
}
