const express = require("express");
const { BookList, InsertBook } = require("../controlles/bookDetails_Controller");

const router = express.Router();

router.get("/book-list",BookList);
router.post("/Insert-Book",InsertBook);

module.exports = router;