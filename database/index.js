const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/rei-reviews';

const db = mongoose.connect(mongoUri);


module.exports = db;
