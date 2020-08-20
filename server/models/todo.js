const mongoose = require("mongoose");
const { Schema } = mongoose;

const Todoschema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Todo", Todoschema);