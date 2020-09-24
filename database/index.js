const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/rei-reviews';

mongoose.connect(mongoUri);
const db = mongoose.connection;


module.exports = db;
