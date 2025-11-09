// App/routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const { BookList, InsertBook } = require("../controllers/bookDetails_Controller");



router.get("/book-list", BookList);
router.post("/Insert-Book", InsertBook);

module.exports = router;
