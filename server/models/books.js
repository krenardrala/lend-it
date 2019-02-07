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

  static delete (data, callback) {
    let id = data.id;

    db.query('DELETE FROM lend WHERE id = ($1)', [id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static update (lend, callback) {
    let name = lend['updatedName'];
    let book = lend['updatedBook'];
    let id = lend['updating']
    db.query('UPDATE lend SET name = ($1), book = ($2) WHERE id = ($3)', [name, book, id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }
}

module.exports = Books;