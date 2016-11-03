
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('edaRegister').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('edaRegister').insert({
          id: 1, name: 'Simon Casey', phone: '021111111', email: 'address@email.com', role:'student', onsite: true
        }),
        knex('edaRegister').insert({
          id: 2, name: 'Rodrigo Delgado', phone: '021222222', email: 'address1@email.com', role:'student', onsite: true
        }),
        knex('edaRegister').insert({
          id: 3, name: 'Steve Sharp', phone: '021333333', email: 'address2@email.com', role:'student', onsite: false
        }),
        knex('edaRegister').insert({
          id: 4, name: 'Ursula Fricker', phone: '021444444', email: 'address3@email.com', role:'student', onsite: true
        }),
        knex('edaRegister').insert({
          id: 5, name: 'Chris Daynes', phone: '021555555', email: 'address4@email.com', role:'student', onsite: true
        }),
        knex('edaRegister').insert({
          id: 6, name: 'Joseph Quested', phone: '021666666', email: 'address5@email.com', role:'phase 0 best friend', onsite: false
        }),
        knex('edaRegister').insert({
          id: 7, name: 'Piet Guersen', phone: '021777777', email: 'address6@email.com', role:'rabbit hole eliminator', onsite: true
        }),



      ]);
    });
};
