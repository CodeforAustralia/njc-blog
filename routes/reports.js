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
  res.render('research');
});

router.get('/final-report', function(req, res, next) {
  // load the research report
  res.render('final');
});

module.exports = router;
