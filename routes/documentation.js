var express = require('express');
var path = require('path');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

var docs = "/../docs/";
// set up the marked parser

/* GET documentation md file */
router.get('/', function(req, res, next) {
  // res.send('return the summary for week ' + num);
  var num = req.params.num;
  var file = path.join(__dirname + docs + "documentation.md");
  var parsed = readMD(file);
  res.render('documentation',{html: parsed});
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
