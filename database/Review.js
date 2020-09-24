const mongoose = require('mongoose');


const reviewsSchema = new mongoose.Schema({
  product_id: Number,
  review_id: Number,
  nickname: String,
  rating: Number,
  title: String,
  body: String,
  images: [{
    id: Number,
    url: String,
  }],
  videos: [{
    id: Number,
    url: String,
  }],
  tags: [String],
  height: String,
  weight: String,
  location: String,
  email: String,
  helpful: {
    yes: Number, default: 0,
    no: Number, default: 0
  },
},
  {
    timestamps: true
  }
);


const Review = mongoose.model('reviews', reviewsSchema);

module.exports = Review;