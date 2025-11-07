const express = require("express");
const { BookList, InsertBook } = require("../controlles/bookDetails_Controller");

const route = express.Router();

route.get("/book-list",BookList);
route.post("/Insert-Book",InsertBook);

module.exports = Router;