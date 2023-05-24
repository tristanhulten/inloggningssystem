var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userid){
    res.render('products', { title: req.session.userid });
  } else {
    res.redirect("index")
  }
});

module.exports = router;
