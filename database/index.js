const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/rei-reviews';
const sampleReview = require('./seed.js')

const db = mongoose.connect(mongoUri);


let reviewsSchema = new mongoose.Schema({

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
      yes: Number,
      no: Number
    },

  },
  {
    timestamp: true
  }
)


let Review = mongoose.model('Review', reviewsSchema);

module.exports = db;
module.exports = Review;