var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var wordSchema   = new Schema({
    mot: String
});
module.exports = mongoose.model('word', wordSchema);
