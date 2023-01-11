// const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

crudSchema.set("timestamps", true);
module.exports = mongoose.model("crud", crudSchema);


