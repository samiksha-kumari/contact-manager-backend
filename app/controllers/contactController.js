const Contact = require("../models/contact");

//localhost:3040/register
//list
module.exports.list = (req, res) => {
  const value = req.query.page;
  console.log("val ", value);
  const options = {
    page: 1,
    limit: 20
  };
  Contact.paginate({}, options)
    // Contact.find()
    .then(contact => {
      res.send(contact.docs); //it show the paginate
    })
    .catch(err => {
      res.send(err);
    });
};

//create
module.exports.create = (req, res) => {
  const body = req.body;
  const contact = new Contact({ ...body, userId: req.user._id });

  //contact.userId = req.user._id;
  contact
    .save()
    .then(savedContact => {
      //   const { name, email, mobile } = contact;
      if (savedContact) {
        res.json(savedContact); //({ name, email, mobile }); //;
      } else res.json({ error: "could not add to database" });
    })
    .catch(err => {
      res.send(err);
    });
};

//show;
module.exports.show = (req, res) => {
  const id = req.params.id;
  Contact.findById(id)
    .then(contact => {
      res.send(contact);
    })
    .catch(err => {
      res.send(err);
    });
};

//update
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Contact.findByIdAndUpdate(id, body, { new: true })
    .then(contact => {
      res.send(contact);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndDelete(id)
    .then(contact => {
      if (contact) {
        res.json(contact);
      } else {
        res.json({});
      }
    })

    .catch(err => {
      res.send(err);
    });
};
