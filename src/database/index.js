const mongoose = require('mongoose');

connectionMongo = mongoose.connect('mongodb+srv://luiz:pause1029@cluster0.fkir0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;

module.exports = mongoose