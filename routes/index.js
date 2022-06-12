var express = require('express');
const { TaylorIpsumGenerator } = require('../services/taylorIpsumGenerator');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/generate', function(req, res, next) {
  let generator = new TaylorIpsumGenerator()
  return res.send(generator.generate())
})

module.exports = router;
