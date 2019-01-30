const db = require('../database');

class Books {
  static retrieveAll (callback) {
    db.query('SELECT book, name, date, id from lend', function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static insert (lend, callback) {
    let name = lend['name'];
    let book = lend['book'];
    db.query('INSERT INTO lend (name, book) VALUES ($1, $2)', [name, book], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }
}

module.exports = Books;