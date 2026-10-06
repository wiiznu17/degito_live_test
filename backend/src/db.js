const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 5435,
  user: process.env.PGUSER || 'devtest',
  password: process.env.PGPASSWORD || 'devtest',
  database: process.env.PGDATABASE || 'devtest',
});

module.exports = pool;
