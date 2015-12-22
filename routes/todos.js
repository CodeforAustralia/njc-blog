var express = require('express');
var path = require('path');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var todos = [
    {title: 'Talk to @rustum about DOE slack'},
    {title: 'Clean up referrals map'},
    {title: 'Make referrals map + FV prettier'},
    {title: 'Catch up with Jurgen'},
    {title: 'Catch up with Alexar (CfA slack)'},
  ];

  var done = [
    {title: 'set up njc slack'},
  ];
  res.render('todos', {todos: todos});
});

module.exports = router;
