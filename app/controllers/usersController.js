const { User } = require("../models/users");

//localhost:3040/users/register
module.exports.register = (req, res) => {
  const body = req.body;
  console.log(body);
  const user = new User(body);
  user
    .save()
    .then(user => {
      console.log(user);
      const { _id, username, email } = user;
      res.send({ _id, email, username }); //(user);
      //console.log(user.isNew);
    })
    .catch(err => {
      res.send(err);
    });
};

//localhost:3040/ users/ login;
module.exports.login = (req, res) => {
  const body = req.body;
  console.log(body);
  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateToken();
    })
    .then(token => {
      console.log(token);
      res.send(token);
      //res.setHeader("x-auth", token).send({});
    })
    .catch(err => {
      res.send(err);
    });
};
