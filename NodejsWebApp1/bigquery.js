// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

async function queryStackOverflow() {
  // Queries a public Stack Overflow dataset.

  // Create a client
  const bigqueryClient = new BigQuery();

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

  console.log('Query Results:');
  rows.forEach(row => {
    console.log(row);
  });
}
queryStackOverflow();