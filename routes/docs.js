var express = require('express');
var path = require('path');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

var docs_dir = "/../docs/";
// set up the marked parser


/* GET users listing. */

/* GET users listing. */
router.get('/:doc', function(req, res, next) {
  var doc = req.params.doc;
  var file = path.join(__dirname + docs_dir + doc + ".md");
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
