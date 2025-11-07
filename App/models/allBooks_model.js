let mongoose = require("mongoose");

let AvailableBooksSchema = mongoose.Schema({
        dept : {
                type : String,
                require : true
        },
        book:{
                type : String,
                required : true
        },
        auth:{
                type : String,
                required : true
        }
});

let bookModel = mongoose.model("BooksDetails",AvailableBooksSchema)

module.exports = bookModel;