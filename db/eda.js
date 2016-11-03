var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getMinions: getMinions
}

//get all minions
function getMinions() {
  return knex('edaRegister')
}

//check if onsite
function isOnsite() {
  
}
