const express = require("express")
const userRoutes = require("./routes/userRoutes")
const blogRoutes = require("./routes/blogRoutes")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 8000;

const app = express();

mongoose.connect("mongodb://localhost:27017/loginSignup")
    .then(() => console.log("MongoDB is connected")).catch((err) => console.log(err))

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes)
app.use("/blog", blogRoutes)

app.listen(PORT, () => console.log("Server is running on PORT:" + PORT))


