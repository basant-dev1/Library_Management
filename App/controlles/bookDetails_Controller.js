const bookModel = require("../models/allBooks_model");

// ✅ Insert a new book
let InsertBook = async (req, res) => {
  try {
    const { bookName, authName, deptName } = req.body;

    if (!bookName || !authName || !deptName) {
      return res.status(400).json({ status: 0, message: "All fields are required" });
    }

    // ✅ handle image upload
    let imageUrl = "";
    if (req.file) {
      imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const books = new bookModel({
      dept: deptName,
      book: bookName,
      auth: authName,
      image: imageUrl || "https://cdn-icons-png.flaticon.com/512/2232/2232688.png" // default image
    });

    await books.save();
    res.status(201).json({ status: 1, message: "Book added successfully" });
  } catch (err) {
    console.error("Error inserting book:", err);
    res.status(500).json({ status: 0, message: "Failed to add book" });
  }
};

// ✅ Get all books
let BookList = async (req, res) => {
  try {
    const bookList = await bookModel.find();
    res.status(200).json({
      status: 1,
      message: "Book List",
      data: bookList
    });
  } catch (err) {
    console.error("Error fetching book list:", err);
    res.status(500).json({
      status: 0,
      message: "Failed to fetch book list"
    });
  }
};

module.exports = { InsertBook, BookList };
