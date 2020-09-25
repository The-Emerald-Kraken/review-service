const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Reviews = require('../database/Review.js');




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname  + '/../public')));

app.get('/api/products/reviews', (req, res) => {

  Reviews.find({})
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(503));

});




const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
