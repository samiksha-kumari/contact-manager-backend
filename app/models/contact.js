const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: function(value) {
      return validator.isEmail(value);
    },
    message: function() {
      return "email is invalid";
    }
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

contactSchema.plugin(mongoosePaginate);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
