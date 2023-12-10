// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint for handling reservations
app.post('/reserve', (req, res) => {
  const { customerName, email, date } = req.body;
  // Here, you can handle the reservation data (store in a database, etc.)
  console.log('Reservation Received:', { customerName, email, date });
  res.send('Reservation successful!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
