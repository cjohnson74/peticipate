const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BiiggieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  sources: {
    type: Array,
  },
  images: {
    type: String,
  },
  helpOptions: [
    {
      name: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      numOfPeople: {
        type: Number,
      },
    },
  ],
});

const Biiggie = mongoose.model("Biiggie", BiiggieSchema);

moduele.exports = Biiggie;