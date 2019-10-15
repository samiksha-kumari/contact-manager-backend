const { User } = require("../models/users");

const authenticateUser = function(req, res, next) {
  // we pass variable no.of arguemtns
  const token = req.header("x-auth");
  console.log("t ", token);
  User.findByToken(token)
    .then(user => {
      if (user) {
        req.user = user;
        req.token = token;
        next();

        // is valid token // our own method created by us.
        // res.send(user);
      } else {
        res.status("401").send({ notice: "token not available" });
      }
    })
    .catch(err => {
      console.log("hi");
      res.status("401").send(err);
    });
};

module.exports = { authenticateUser };
