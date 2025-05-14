const mongoose = require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

const MONGO_URI = 'mongodb+srv://testusername:0O0KjHzRSsHcql8T@project01.swwidea.mongodb.net/?retryWrites=true&w=majority&appName=Project01';

mongoose.connect(MONGO_URI)
    .then(() => debuglog('Connected to the database.'))
    .catch((err) => debuglog('Database Connection error:', err));

const db = mongoose.connection;

module.exports = db;
