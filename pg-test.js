const { Client } = require('pg');
(async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'muslimbek',
    database: 'portfolio',
  });
  try {
    await client.connect();
    console.log('connected');
    const res = await client.query('SELECT 1 AS ok');
    console.log(res.rows);
    const dbCheck = await client.query("SELECT datname FROM pg_database WHERE datname='portfolio'");
    console.log('db exists', dbCheck.rows);
  } catch (err) {
    console.error('ERR', err.message);
    console.error(err);
    process.exit(1);
  } finally {
    await client.end();
  }
})();
