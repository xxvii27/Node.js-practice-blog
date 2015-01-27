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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set port

//Routes
var router = express.Router();        

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


//Posts Route
router.route('/posts')

    .post(function(req, res) {
        
        var post = new Post();    
        post.title = req.body.name;  
        post.content = req.body.content;

        // save the bear and check for errors
        post.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'post created!' });
        });
        
    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Server is on port' + port);
