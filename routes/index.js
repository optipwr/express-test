var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var fruits = ['apple', 'banana', 'orange', 'pear'];
	res.render('index', { fruitArray: fruits });
});

router.get('/reverse', function(req, res, next) {
	var fruits = ['apple', 'banana', 'orange', 'pear'];
	var fruitArrayReverse = fruits.reverse();
	res.render('reverse', { fruitArray: fruitArrayReverse });
});

module.exports = router;
