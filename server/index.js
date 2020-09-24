const express = require('express');
const bodyParser = require('body-parser');
const Review = require('../database/Review.js')




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/reviews', (req, res) => {
  Review.find({}).sort('-createdAt')
});







const PORT = 3005;

app.listen(PORT, ()=> {
  console.log(`Listening on Port: ${PORT}`);
});
