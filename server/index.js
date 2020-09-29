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

// UNTESTED - TODO
app.post('/api/products/reviews', (req, res) => {
  Reviews.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(503));
});

app.patch('/api/products/reviews/:helpful/:id', (req, res) => {
  const filter = { _id: req.params.id };
  const help = req.params.helpful;
  Reviews.find(filter)
    .then((data) => {
      if (help === 'yes') {
        return [(1 + data[0].helpful[help]), data[0].helpful.no];
      }
      return [data[0].helpful.yes, (1 + data[0].helpful[help])];
    })
    .then((newValue) => ({ helpful: { yes: newValue[0], no: newValue[1] } }))
    .then((update) => (Reviews.findOneAndUpdate(filter, update)))
    .then(() => Reviews.find(filter))
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(503));

  // res.sendStatus(501);
});

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
