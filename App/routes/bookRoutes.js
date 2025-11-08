const express = require("express");
const { BookList, InsertBook } = require("../controlles/bookDetails_Controller");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// ✅ Multer setup for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// ✅ Routes
router.get("/book-list", BookList);
router.post("/insert", upload.single("bookImage"), InsertBook);

module.exports = router;
