const { default: mongoose } = require("mongoose");
//create Schema in moongoose
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    enum: ["chef", "owner", "manager", "waiter"],
    required: true
  },
  mobile: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  }
});

const person = mongoose.model('person', personSchema);

module.exports = person; // Export the person model directly