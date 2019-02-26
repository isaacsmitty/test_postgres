const pg = require("pg");
const settings = require("./settings"); // settings.json


var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
  }
});


const input = process.argv.slice(2);

knex('famous_people')
  .insert({ first_name: input[0], last_name: input[1], birthdate: input[2] })
  .asCallback(function(err, result) {
    if (err) return console.error(err);
        console.log('Person Inserted');
        knex.destroy();
      });
