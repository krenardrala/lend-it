let bcrypt = require('bcrypt');
let express = require('express');
let Users = require('../models/users');
let jwt = require('jsonwebtoken');
const config = {
  jwtSecret: 'somesecretkeyforjsonwebtoken'
};

let router = express.Router();

router.get('/', function (req, res) {
  Users.retrieveAll(function (err, books) {
    if (err)
      return res.json(err);
    return res.json(books);
  });
});

//TO-DO Fix the response of DB (result, err)
router.post('/', function (req, res) {
  const { username, password } = req.body;
  if(username && password) {
    const password_digest = bcrypt.hashSync(password, 10);
    let user = {
      username: username,
      password: password_digest
    };
    Users.login(user, function (result, err) {
      if (result) {
        if (bcrypt.compareSync(password, result['0']['password'])) {
          const token = jwt.sign({
            id: result['0']['id'],
            username: result['0']['username']
          }, config.jwtSecret, { expiresIn: '1h' });
          return res.json({token})
        }else {
          return console.log("ERROR PASSWORD");
        }
      }
    })
  }
});

module.exports = router;