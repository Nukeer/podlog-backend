const pg = require('pg');
const { environment } = require('../environments/environment.prod');

const config = {
  host: environment.host,
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: environment.user,
  password: environment.password,
  database: environment.database,
  port: environment.port,
  ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
  if (err) throw err;
  else {
    client.query(`
      CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, name VARCHAR(50), email VARCHAR(100) UNIQUE, password TEXT, admin Boolean);
      CREATE TABLE IF NOT EXISTS email (id serial PRIMARY KEY, name TEXT, email VARCHAR(100) UNIQUE, subject TEXT, text TEXT);
    `)
  }
});

module.exports = client;
