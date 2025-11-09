// App/models/allBooks_model.js
const mongoose = require("mongoose");

const AvailableBooksSchema = new mongoose.Schema({
  dept: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  auth: {
    type: String,
    required: true,
  },
  image: {
    type: String, // optional image url field
    default: null,
  },
});

const bookModel = mongoose.model("BooksDetails", AvailableBooksSchema);

module.exports = bookModel;
