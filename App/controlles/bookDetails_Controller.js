const mongoose = require ("mongoose")

let InsertBook = async (req,res)=>{
    let {bookName,authName} = req.body;
        let books = new bookModel({
                book : bookName,
                auth : authName
        });

        books.save().then(()=>{
                res.send("data send");
                
        }).catch((err)=>{
                res.send("data not send")
        })
}


let BookList = async (req,res)=>{
     let bookList = await bookModel.find();
     res.status(200).json({status : 1,message : "Book List",data:bookList});
}



module.exports = {InsertBook,BookList}