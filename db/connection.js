const { Client } = require('pg');

const client = new Client({
  user: 'dannymchugh',  
  host: 'localhost',
  database: 'employee_tracker',
  password: 'Danny22',  
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = client;