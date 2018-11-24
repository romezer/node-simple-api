var mongoose = require('mongoose');

mongoose.Promose = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};