var express = require('express');
var path = require('path');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

var summaries_dir = "/../summaries/";
// set up the marked parser


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('return all the updates');
});

/* GET users listing. */
router.get('/:num', function(req, res, next) {
  // res.send('return the summary for week ' + num);
  var num = req.params.num;
  var file = path.join(__dirname + summaries_dir + num + ".md");
  var parsed = readMD(file);
  res.render('week-summary',{week: num, html: parsed});
});

function readMD(file){
  var md = fs.readFileSync(file, "utf8");
  //console.log(md.toString());
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });
  return marked(md.toString(), function(err, data){
    return data;
  });
}

module.exports = router;
