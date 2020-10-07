const mongoose = require('mongoose');
// uncomment if using locally
// const mongoUri = 'mongodb://localhost/rei-reviews';

// uncomment if  using docker
const mongoUrl = 'mongodb://myMongo/rei-reviews';
// uncomment if  using docker
mongoose.connect(mongoUrl, { server: { reconnectTries: Number.MAX_VALUE } })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
// uncomment if using locally
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));
const db = mongoose.connection;

module.exports = db;
