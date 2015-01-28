var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', { title: 'Express' ,  fs: { sayHi:function(){
    //var width = window.screen.width;
    //var height = window.screen.height;
    //var div = document.getElementById("screen");
    //div.width = width;
    //div.height = height;
    alert("done");
  }}
  });
});

module.exports = router;
