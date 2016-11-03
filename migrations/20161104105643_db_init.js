
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('edaRegister', function(table){
    table.increments('id')
    table.string('name')
    table.string('phone')
    table.string('email')
    table.string('role')
    table.boolean('onsite')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('edaRegister')
};
