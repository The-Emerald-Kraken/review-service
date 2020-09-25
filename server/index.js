const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Reviews = require('../database/Review.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/products/reviews', (req, res) => {
  Reviews.find({})
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(503));
});

app.get('/api/products/reviews/:id', (req, res) => {
  Reviews.find({ product_id: req.params.id })
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(410));
});

// UNTESTED
app.post('/api/products/reviews', (req, res) => {
  Reviews.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(503));
});

app.patch('/api/products/reviews/:helpful/:id', (req, res) => {
  // TODO - Later
  // use req.params.id and req.params.helpful
  res.sendStatus(501);
});

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
