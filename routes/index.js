var express = require('express');
const { TaylorIpsumGenerator } = require('../services/taylorIpsumGenerator');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/generate', function(req, res, next) {
  let generator = new TaylorIpsumGenerator()
  let length = req.query.length
  let paragraphs = req.query.paragraphs
  console.log(`Length: ${length}`)
  console.log(`Paragraphs: ${paragraphs}`)
  return res.send(generator.generate(paragraphs, length))
})

module.exports = router;
