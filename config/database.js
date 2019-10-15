const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/june-weekday-PhonebookApps", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("database connect successfully to db");
  })
  .catch(err => {
    console.log("error connecting to db", err);
  });

module.exports = mongoose;
