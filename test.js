// const { Client } = require("pg");

// const client = new Client(process.env.DATABASE_URL);

// (async () => {
//   await client.connect();
//   try {
//     const results = await client.query("SELECT NOW()");
//     console.log(results);
//   } catch (err) {
//     console.error("error executing query:", err);
//   } finally {
//     client.end();
//   }
// })();
// const { Client } = require('@cockroachdb/crdb-pg');

// Set up the database connection
//Setup Express

const express = require('express') //Set up our main function variable for calling the Express module and require it as a dependency
const app = express() //Object returned by express() 

//Express needs a port and host for its output. We'll define these here and change them later.
const port = 8080;
const host = 'localhost';
//Output to console via our Express object “app”

app.listen(port, host, () => {
  console.log(`Server started at ${host} port ${port}`
);
});


