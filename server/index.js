const express = require('express');
const bodyParser = require('body-parser');

const Reviews = require('../database/Review.js');




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/reviews', (req, res) => {
  Reviews.find({}).sort('-createdAt')
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(503);
    });

});




const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
