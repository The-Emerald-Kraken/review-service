const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Reviews = require('../database/Review.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/products/reviews/avg/:item', (req, res) => {
  Reviews.find({ product_id: req.params.item })
    .then((data) => {
      const avg = {
        rating: 0,
        fit: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      data.forEach((doc) => {
        avg.rating += doc.rating;
        avg.fit += Number(doc.fit);
        avg[doc.rating] += 1;
      });
      avg.rating /= data.length;
      avg.fit /= data.length;
      avg.count = data.length;
      res.send(avg);
    })
    .catch(() => res.sendStatus(503));
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  let sortBy;
  if (req.params.sort === 'Most Helpful') {
    sortBy = '-helpful_yes';
  } else if (req.params.sort === 'Highest to Lowest Rating') {
    sortBy = 'rating';
  } else if (req.params.sort === 'Lowest to Highest Rating') {
    sortBy = '-rating';
  } else {
    sortBy = '-createdAt';
  }

  Reviews.find({ product_id: req.params.id }).sort(sortBy).limit(Number(req.params.count))
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(410));
});

// UNTESTED - TODO
app.post('/api/products/reviews', (req, res) => {
  Reviews.create(req.body)
    .then(() => {
      console.log(req.body);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(503));
});
// TODO - Needs to be cleaned up. This model was based on an old structure that is no longer uesed
// It works, it just not purtty
app.patch('/api/products/reviews/:helpful/:id', (req, res) => {
  const filter = { _id: req.params.id };
  const help = req.params.helpful;
  Reviews.find(filter)
    .then((data) => {
      if (help === 'yes') {
        return [(1 + data[0].helpful_yes), data[0].helpful_no];
      }
      return [data[0].helpful_yes, (1 + data[0].helpful_no)];
    })
    .then((newValue) => ({ helpful_yes: newValue[0], helpful_no: newValue[1] }))
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
