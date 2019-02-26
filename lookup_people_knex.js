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


const input = process.argv.slice(2)[0];

knex.select('*').from('famous_people')
  .where('first_name', '=', input)
  .orWhere('last_name', '=', input)
  // .limit(10)
  // .offset(x)
  .asCallback(function(err, result) {
    if (err) return console.error(err);
      for (var i = 0; i < result.length; i++) {
        console.log(`${i + 1}: ${result[i].first_name} ${result[i].last_name}, born ${result[i].birthdate}`);
        };
        knex.destroy();
      });
