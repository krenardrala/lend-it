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
      console.log("USER LOGIN");
      if (result) {
        console.log("ERRORRRR", result['0']['password']);
        //return res.json(err);
        if (bcrypt.compareSync(password, result['0']['password'])) {
          const token = jwt.sign({
            id: result['0']['id'],
            username: result['0']['username']
          }, config.jwtSecret);
          console.log("TOKEN: ", token);
          return res.json({token})
        }else {
          return console.log("ERROR PASSWORD");
        }
      }
      //return res.json(result);
      /*if (result) {
        console.log("RESULT");
        if (bcrypt.compareSync(password, result['password'])) {
          const token = jwt.sign({
            id: result['id'],
            username: result['username']
          }, config.jwtSecret);
          console.log("TOKEN: ", token);
          return res.json({token})
        }else {
          return console.log("ERROR PASSWORD");
        }
      }*/
    })
  }
});

/*router.delete('/', function (req, res) {
  let id = req.body.id;
  Users.delete(id, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});*/

/*router.put('/', function (req, res) {
  let book = req.body;
  Users.update(book, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});*/

module.exports = router;