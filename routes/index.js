var express = require('express');
var router = express.Router();
//set router
/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
});

router.get('/events',(req, res, next)=> {
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


//script
let slide = 1;

showslide=(n)=>{
  let i;
  let x = req.body.mySlide
  if(n > x.length) {
    slide = 1
  }else{
    slide = x.length
  }
  for(i = 0;i<x.length; i++){
    x[i].style.display = "none";
  }
  x[slide-1].style.display = "block";
}
plus=(n)=>{
  showslide(slide += n)
}
showslide(slide);