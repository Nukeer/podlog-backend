const pg = require('pg');
const config = {
  host: 'ec2-52-86-33-50.compute-1.amazonaws.com',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'eyeitgwnzvsvym',
  password: 'e5dc2daa99a5c90a56cc2e4fdb8b440b0a12dbac081d1248b87ccc353e5dc449',
  database: 'd17lpl5npi2hj9',
  port: 5432,
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
