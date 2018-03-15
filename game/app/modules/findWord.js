var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Word      = require('../models/word');
var findWord={};

findWord.saveWord = function(router){
router.route('/word').get(function(req, res) {
        var s = req.query.word;
      //  console.log(s);
        Word.find( {'mot':s}, function(err, result){
        //    console.log(result);
            if(result.length == 0){
            	console.log("very bad");
            	res = 0;
            }else{
           		var obj = result[0];
           		console.log(obj);
            	//console.log(obj.mot);
            	if ( obj.mot == s){
               		console.log("Good Job");
               		res.json(result);
	           
	            }else{
	            	res.json(result);
    	        	console.log("veryy bad");
        	    	//res = 0;
        	    }
        	}	
        });
});

};

module.exports = findWord;


// var express    = require('express');
// var bodyParser = require('body-parser');
// var mongoose   = require('mongoose');
// var Book       = require('../models/book');
// var addBook={};
//
// addBook.saveBook = function(router){
//
// router.route('/consonne').post(function(req, res) {
//           var c = "";
//           var possible = "bbccdfghjkllmmmnnnpqrrssttvwxz";
//           c = possible.charAt(Math.floor(Math.random() * possible.length));
//           console.log(c);
//           res.send(c);
//       });
//
// router.route('/voyelle').post(function(req, res) {
//                 var v = "";
//                 var possible = "aaaeeeeiioouy";
//                 v = possible.charAt(Math.floor(Math.random() * possible.length));
//                 console.log(v);
//               });
// };
//
// module.exports = addBook;
