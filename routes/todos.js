var express = require('express');
var path = require('path');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var todos = [
    {title: 'Create user stories / needs documentation for prototypes'},
    {title: 'Go through the 18F Methods cards and figure out how to approach next steps for each prototype'},
    {title: 'Move this all over to asana'},
    {title: 'Hieng to send me: Cherry\'s report, stuart ross - melb uni criminology academic '},
    {title: 'Chase up online adjournments with Gavin'},
    {title: 'Spin off the NJC intranet interface into a repo'},
    {title: 'Catchup with Gaz / GA'},
    {title: 'Contact / Catch up with ri / data viz meetup'},
    {title: 'Jessica Enders reporting back to NJC mid Feb'},
    {title: 'Talk to @rustum about DOE slack'},
    {title: 'Clean up referrals map'},
    {title: 'Make referrals map + FV prettier'},
    {title: 'Organise catch up with Alexar (CfA slack)'},
  ];

  var done = [
    {title: 'Organise catch up with Jurgen'},
    {title: 'set up njc slack'},
  ];

  res.render('todos', {todos: todos});
});

module.exports = router;
