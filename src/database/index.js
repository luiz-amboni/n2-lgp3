const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/n2lgp', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;

module.exports = mongoose