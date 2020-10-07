const mongoose = require('mongoose');
// uncomment if using locally
// const mongoUri = 'mongodb://localhost/rei-reviews';

// uncomment if  using docker
const mongoUrl = 'mongodb://172.17.0.2:27017/rei-reviews';
// uncomment if  using docker
mongoose.connect(mongoUrl, { server: { reconnectTries: Number.MAX_VALUE } });

// uncomment if using locally
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));
const db = mongoose.connection;

module.exports = db;
