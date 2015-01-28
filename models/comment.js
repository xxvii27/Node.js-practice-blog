//Comment Model
var mongoose     = require('mongoose');
var Schema         = mongoose.Schema;

var CommentSchema   = new Schema({
    content: String,
    _post: { type: Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = mongoose.model('Comment', CommentSchema);
