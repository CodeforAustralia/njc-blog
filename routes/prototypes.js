var express = require('express');
var path = require('path');
var router = express.Router();
var fs = require('fs');

/* GET prototypes listing. */
router.get('/', function(req, res, next) {
  res.render('prototypes');
});

router.get('/', function(req, res, next) {
  res.send('return all the prototypes');
});

module.exports = router;
