let express = require('express');
let Books = require('../models/books');
const Auth = require('../middlewares/authenticate');

let router = express.Router();

router.get('/', Auth.authenticate, function (req, res) {
  const id = req.query.ID;
  Books.retrieveAll({id: id}, function (err, books) {
    if (err)
      return res.json(err);
    return res.json(books);
  });
});

router.post('/', Auth.authenticate, function (req, res) {
  let book = req.body;
  Books.insert(book, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

router.delete('/', Auth.authenticate, function (req, res) {
  let id = req.body.id;
  Books.delete(id, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

router.put('/', Auth.authenticate, function (req, res) {
  let book = req.body;
  Books.update(book, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

module.exports = router;