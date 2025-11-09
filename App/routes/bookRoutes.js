// App/routes/bookRoutes.js
const express = require("express");
const { BookList, InsertBook } = require("../controllers/bookDetails_Controller");

const router = express.Router();

router.get("/book-list", BookList);
router.post("/Insert-Book", InsertBook);

module.exports = router;
