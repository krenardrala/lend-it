const db = require('../database');

class Users {
  static retrieveAll (callback) {
    db.query('SELECT username, password, email, id, created_on, last_login, firstName, lastName from "user"', function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static insert (user, callback) {
    let username = user['username'];
    let password = user['password'];
    let email = user['email'];
    let firstName = user['firstName'];
    let lastName = user['lastName'];
    db.query('INSERT INTO "user" (username, password, email, firstName, lastName) VALUES ($1, $2, $3, $4, $5)', [username, password, email, firstName, lastName], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static login (user, callback) {
    let username = user['username'];
    db.query('SELECT username, password, email, id, created_on FROM "user" WHERE username = ($1)', [username], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static userById (user, callback) {
    let id = user['id'];
    db.query('SELECT username, password, email, id, created_on FROM "user" WHERE id = ($1)', [id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static userPublicDataById (user, callback) {
    let id = user['id'];
    db.query('SELECT username, email, id, firstName, lastName, created_on FROM "user" WHERE id = ($1)', [id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  static delete (user, callback) {
    let id = user.id;

    db.query('DELETE FROM user WHERE id = ($1)', [id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }

  /*static update (lend, callback) {
    let name = lend['updatedName'];
    let book = lend['updatedBook'];
    let id = lend['updating']
    db.query('UPDATE lend SET name = ($1), book = ($2) WHERE id = ($3)', [name, book, id], function (err, res) {
      if(err.error)
        return callback(err);
      callback(res);
    })
  }*/
}

module.exports = Users;