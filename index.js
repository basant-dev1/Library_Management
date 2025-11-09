// index.js
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
require("dotenv").config();

const bookRouter = require("./App/routes/bookRoutes");
const authRouter = require("./App/routes/authRoutes");

let app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ Database Connection Error:", err));

// ✅ Routes
app.use("/", bookRouter); // Existing book routes
app.use("/api/auth", authRouter); // New Auth routes

// Basic root health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
