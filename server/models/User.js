const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      match: [/.+@.+\..+/, "Invalid, enter an e-mail address"],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1521754040860-ed38b308ac9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    createdBiiggies: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Biiggie'
      }
    ],
    liked: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Biiggie'
      }
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function(next) {
  if(this.password) {                                                                                                                                                        
    let salt = bcrypt.genSaltSync(10)                                                                                                                                     
    this.password  = bcrypt.hashSync(this.password, salt)
  next()
  }
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
