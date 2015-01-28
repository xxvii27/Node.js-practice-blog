//Post Model
var mongoose     = require('mongoose');
var Schema         = mongoose.Schema;

var PostSchema   = new Schema({
    title: String,
    content: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', PostSchema);
