require('dotenv').config()
const express = require("express")
const userRoutes = require("./routes/userRoutes")
const blogRoutes = require("./routes/blogRoutes")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB is connected")).catch((err) => console.log(err))

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRoutes)
app.use("/blog", blogRoutes)

app.listen(process.env.PORT, () => console.log("Server is running on PORT:" + process.env.PORT))


