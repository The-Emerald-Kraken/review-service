const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost';

const db = mongoose.connect(mongoUri);

module.exports = db;