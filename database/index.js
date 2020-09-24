const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/rei-reviews';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>console.log('MongoDB Connected'))
.catch((err)=>console.log(err));
const db = mongoose.connection;



module.exports = db;
