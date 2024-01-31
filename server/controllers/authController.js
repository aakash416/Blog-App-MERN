const userModel = require("../models/userModel");
const Blog = require("../models/Blog");
const bcryptjs = require("bcryptjs");
async function handleSignup(req, res) {
    try {
        const { fisrtName, lastName, email, password, phoneNumber } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser)
            return res
                .status(400)
                .json({
                    message: "User with this email already exists Please try to login",
                });
        const hashPassword = await bcryptjs.hash(password, 8);
        const newUser = await userModel.create({
            ...req.body,
            password: hashPassword,
        });
        return res.status(201).json({ message: "User Register Susccessfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}




async function handelLogin(req, res) {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser)
            return res.status(401).json({ message: "Invalid email id or password" });

        const compair = await bcryptjs.compare(password, existingUser.password); //

        if (compair)
            return res
                .status(200)
                .json({
                    userId: existingUser._id,
                    firstName: existingUser.firstName,
                    lastName: existingUser.lastName,
                    email: existingUser.email,
                    phoneNumber: existingUser.phoneNumber,
                });
        else
            return res.status(401).json({ message: "Invalid email id or password" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}



async function handelNewblogpost(req, res) {
    try {
        const newUser = await Blog.create(req.body);
        return res.status(201).json({ message: "New Blog Susccessfully Created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

async function handelAllblogpost(req, res) {
    try {
        const allBlogData = await Blog.find();
        return res.status(201).json(allBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
async function handelBlogbyId(req, res) {
    try {
        const blogId = req.params.blogId;
        const blogbyId = await Blog.findById(blogId);
        return res.status(201).json(blogbyId);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = { handleSignup, handelLogin, handelNewblogpost, handelAllblogpost, handelBlogbyId };
