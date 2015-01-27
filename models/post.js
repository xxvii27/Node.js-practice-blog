//Post Model
var mongoose     = require('mongoose');
var Schema         = mongoose.Schema;

var PostSchema   = new Schema({
    Title: String
    Content: String
});

module.exports = mongoose.model('Post', PostSchema);
