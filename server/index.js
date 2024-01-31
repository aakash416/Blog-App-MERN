const express = require("express")
const authRoute = require("./routes/authRoute")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 8000;

const app = express();

mongoose.connect("mongodb://localhost:27017/loginSignup").then(() => console.log("MongoDB is connected")).catch((err) => console.log(err))

app.use(express.json());
app.use(cors());

app.use("/", authRoute)


//API
//http://localhost:8000/login
//http://localhost:8000/signup
//http://localhost:8000/newblogpost
//http://localhost:8000/allblogpost
//http://localhost:8000/blogbyid



app.listen(PORT, () => console.log("Server is running on PORT:" + PORT))


