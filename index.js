let express = require("express")

const cors = require("cors");


const mongoose = require("mongoose");
const bookModel = require("./App/models/allBooks_model");
const { InsertBook, BookList } = require("./App/controlles/bookDetails_Controller");
const router = require("./App/routes/bookRoutes");
require("dotenv").config();

let app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DBURL).then(()=>{
        console.log("Connected DB");
        app.listen(process.env.PORT,()=>{
                console.log("server is running on port " +process.env.PORT);
        })
})


app.use("/",router);