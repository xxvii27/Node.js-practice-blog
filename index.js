//index.js
//Server Setup 

// Dependencies
var express     = require('express');        // call express
var app           = express();                 // define our app using
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Post = require('./models/post');

//Init DB
mongoose.connect("mongodb://xxvii27:l0u15IICS@ds045970.mongolab.com:45970/heroku_app33530031");

//post request urlencode decoder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set port

//Routes
var router = express.Router();        

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); 
});


//Posts Route
router.route('/posts')

	    //post
	    .post(function(req, res) {
	        
		        var post = new Post();    
		        post.title = req.body.title;  
		        post.content = req.body.content;

		        // save the post and check for errors
		        post.save(function(err) {
		            if (err)
		                res.send(err);

		            res.json({ message: 'post created!' });
		        });
	        
	     })

	    //get
	     .get(function(req, res) {
		        Post.find(function(err, posts) {
		            if (err)
		                res.send(err);

		            res.json(posts);
		        });
	      });

//Individual Post Routes
router.route('/posts/:post_id')

	.get(function(req, res) {
	        Post.findById(req.params.post_id, function(err, post) {
	            if (err)
	                res.send(err);
	            res.json(post);
	        });
	 })

	//UPDATE / PUT
	.put(function(req, res) {

	        Post.findById(req.params.post_id, function(err, post) {

	            if (err)
	                res.send(err);

	            post.title = req.body.title;  
	            post.content = req.body.content;
	            post.save(function(err) {
	                if (err)
	                    res.send(err);

	                res.json({ message: 'Post updated!' });
	            });

	       });
	})

	// DELETE 
	.delete(function(req, res) {

	        Post.remove({
			_id: req.params.post_id
		}, function(err, post) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

//Comments Routes






router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Server is on port' + port);



