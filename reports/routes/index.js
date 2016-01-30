var express = require('express');
var router = express.Router();
var path = require('path');
var marked = require('marked');
var fs = require('fs');

var notes_dir = "/../notes/";
// set up the marked parser

/* GET home page. */
router.get('/research', function(req, res, next) {
  // load the research report
  var data = getResearchData();
  console.log(data);
  res.render('research');
});

function getResearchData(){

}

module.exports = router;
