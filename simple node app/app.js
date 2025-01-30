const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Kubernetes! </h1>
    `);
});

app.get('/error', (req, res) => {
    process.exit(1);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
