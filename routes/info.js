var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  res.render(name);
});

module.exports = router;
