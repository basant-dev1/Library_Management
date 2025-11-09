// App/controllers/bookDetails_Controller.js
const bookModel = require("../models/allBooks_model");

// Insert book
let InsertBook = async (req, res) => {
  try {
    const { bookName, authName, deptName, imageUrl } = req.body;

    if (!bookName || !authName || !deptName) {
      return res.status(400).json({ status: 0, message: "Missing required fields" });
    }

    const books = new bookModel({
      dept: deptName,
      book: bookName,
      auth: authName,
      image: imageUrl || null,
    });

    await books.save();
    res.status(201).json({ status: 1, message: "Book saved" });
  } catch (err) {
    console.error("InsertBook error:", err);
    res.status(500).json({ status: 0, message: "Failed to save book", error: err.message });
  }
};

// List books
let BookList = async (req, res) => {
  try {
    const bookList = await bookModel.find();
    res.status(200).json({ status: 1, message: "Book List", data: bookList });
  } catch (err) {
    console.error("BookList error:", err);
    res.status(500).json({ status: 0, message: "Failed to fetch book list", error: err.message });
  }
};

module.exports = { InsertBook, BookList };
