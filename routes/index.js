var express = require('express');
var router = express.Router();
//set router
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Express' });
});

router.get('/question', function(req, res, next) {
  res.render('question', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Express' });
});
module.exports = router;
