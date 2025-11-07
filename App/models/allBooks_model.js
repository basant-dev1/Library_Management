const mongoose = require("mongoose");

const AvailableBooksSchema = mongoose.Schema({
        
        book:{
                type : String,
                required : true
        },
        auth:{
                type : String,
                required : true
        }
});

const bookModel = mongoose.model("BooksDetails",AvailableBooksSchema)

module.exports = bookModel;