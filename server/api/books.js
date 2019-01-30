let express = require('express');
let Books = require('../models/books');

let router = express.Router();

router.get('/', function (req, res) {
  Books.retrieveAll(function (err, cities) {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

router.post('/', function (req, res) {
  let book = req.body;

  Books.insert(book, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

module.exports = router;