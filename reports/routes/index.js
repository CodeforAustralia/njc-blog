var express = require('express');
var router = express.Router();
var path = require('path');
var marked = require('marked');
var fs = require('fs');
var _ = require('lodash');
var MongoClient = require('mongodb').MongoClient;
var notes_dir = "/../notes/";
// set up the marked parser

/* GET home page. */
router.get('/research', function(req, res, next) {
  var days = fetchDays();
  console.log(days);
  // load the research report
  res.render('research');
});

function fetchDays(){
  //var URL = 'mongodb://127.0.0.1:3001/meteor';
  var URL = 'mongodb://client-471cfed2:94cb40ba-9ae6-7e72-ae1a-e9215e4ad5fc@SG-mother1-6243.servers.mongodirector.com:27017/fellow-time-track_meteor_com';
  var days = [];

  MongoClient.connect(URL, function(err, db) {
    if (err){ console.log(err); return; }

    var Days = db.collection('days');
    var Coffees = db.collection('coffees');
    var Events = db.collection('events');
    var Meetings = db.collection('meetings');
    var Journeys = db.collection('journeys');
    var WorkHours = db.collection('work_hours');
    var People = db.collection('people');

    var tc = db.collection('coffees').find({});
    console.log("TOTAL COFFEES: " + tc.count(function(err,res){
      console.log(res);
    }));

    Days.find().toArray(function(err, docs) {
      console.log(docs);
      docs.forEach(function(day){
        //console.log(day);
        var day_id = day._id;
        console.log("Checking day: " + day_id);
        day.coffees = Coffees.find({day_id: day_id}).count();
        //console.log(Coffees.find({day_id: day_id}));
        console.log(day.coffees);
        day.events = Events.find({day_id: day_id}).count();
        day.meetings = Meetings.find({day_id: day_id}).count();
        day.journeys = Journeys.find({day_id: day_id}).count();
        day.work_hours = WorkHours.find({day_id: day_id}).count();
        day.people = People.find({day_id: day_id}).count();
        days.push(day);
      });
      //console.log(days);
      db.close();
    });

  });

  return days;
}

module.exports = router;
