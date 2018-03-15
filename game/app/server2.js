var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var word = require('./models/word.js');
var findWord    = require('./modules/findWord');


mongoose.connect('mongodb://localhost:27017/word');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res , next){
	res.header('Access-Control-Allow-Origin' , '*');
	res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

var port =  3000;
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our library' });
  });

app.use('/library', router) ;

findWord.saveWord(router);

app.listen(port);

console.log('Magic happens on port 3000' );
