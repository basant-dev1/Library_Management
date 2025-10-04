let mongoose = require("mongoose");

let AvailableBooksSchema = mongoose.Schema({
        book:{
                type : String,
                require : true
        },
        auth:{
                type : String,
                require : true
        }
});

let bookModel = mongoose.model("BooksDetails",AvailableBooksSchema)

module.exports = bookModel;