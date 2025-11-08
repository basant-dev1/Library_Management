const mongoose = require("mongoose");

const AvailableBooksSchema = mongoose.Schema({
  dept: {
    type: String,
    required: true
  },
  book: {
    type: String,
    required: true
  },
  auth: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

const bookModel = mongoose.model("BooksDetails", AvailableBooksSchema);

module.exports = bookModel;
