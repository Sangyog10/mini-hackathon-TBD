const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ["Please provide name"]],
    minlength: 3,
    maxlength: 50,
  },

  phone: {
    type: String,
    type: Number,
    required: [true, ["Please provide phone number"]],
  },

  password: {
    type: String,
    required: [true, ["Please provide password"]],
  },
});

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths()); //kun modify vayo user update garda
  // console.log(this.isModified('name'));
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
