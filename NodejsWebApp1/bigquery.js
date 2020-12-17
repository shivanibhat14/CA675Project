// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const fs = require('fs');

async function queryStops() {
  // Queries a public Stack Overflow dataset.

  // Create a client
  const bigqueryClient = new BigQuery();
  var stops = {}
  // The SQL query to run
  const sqlQuery = `SELECT
    stop_name
    FROM \`ca675-assigment2.public_transport.stops\`
    `;

  const options = {
    query: sqlQuery
  };

  // Run the query
  const [rows] = await bigqueryClient.query(options);
  var i = 0;
  rows.forEach(row => {
    if(i != 0)
   stops[i] = row;
   i++;
  });
  const data = JSON.stringify(stops);
  fs.writeFile('stops.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

}
queryStops();
