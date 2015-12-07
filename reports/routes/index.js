var express = require('express');
var router = express.Router();
var path = require('path');
var marked = require('marked');
var fs = require('fs');

var notes_dir = "/../notes/";
// set up the marked parser

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var num = req.params.num;
  var file = path.join(__dirname + notes_dir + "research/report.md");
  var parsed = readMD(file);*/
  //res.render('index', {html: parsed});
  res.render('index');
});

/*function readMD(file){
  var md = fs.readFileSync(file, "utf8");
  //console.log(md.toString());
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
  return marked(md.toString(), function(err, data){
    return data;
  });
}*/

module.exports = router;
