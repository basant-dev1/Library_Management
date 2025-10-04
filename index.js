let express = require("express")
const mongoose = require("mongoose");
const bookModel = require("./App/models/allBooks_model");
require("dotenv").config();

let app = express();
app.use(express.json());

app.post("/Insert-Book",(req,res)=>{
        
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
})


app.get("/book-list",async(req,res)=>{
        let bookList = await bookModel.find();
        res.status(200).json({status : 1,message : "Book List",data:bookList});
})


mongoose.connect(process.env.DBURL).then(()=>{
        console.log("Connected DB");
        app.listen(process.env.PORT,()=>{
                console.log("server is running on port " +process.env.PORT);
        })
})