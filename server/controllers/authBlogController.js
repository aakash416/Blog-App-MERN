const Blog = require("../models/blogModel");

async function handelNewBlogPost(req, res) {
    try {
        const newUser = await Blog.create(req.body);
        return res.status(201).json({ message: "New Blog Susccessfully Created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

async function handelAllBlogPost(req, res) {
    try {
        console.log(req.cookies.token);
        const allBlogData = await Blog.find().populate("authorId");
        return res.status(201).json(allBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

async function handelAllAuthorBlogPost(req, res) {
    try {
        const blogId = req.params.id;
        const allAuthorBlogData = await Blog.find({ authorId: blogId }).populate("authorId");
        return res.status(201).json(allAuthorBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
async function handelBlogById(req, res) {
    try {
        const blogId = req.params.id;
        const blogbyId = await Blog.findById(blogId);
        return res.status(201).json(blogbyId);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

async function handeleEditBlogById(req, res) {
    try {
        const blogId = req.params.id;
        const blogbyId = await Blog.findByIdAndUpdate(blogId, req.body)
        return res.status(201).json("Updated Scuccessfully Blog");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
async function handeleDeleteBlogById(req, res) {
    try {
        const blogId = req.params.id;
        const blogbyId = await Blog.findByIdAndDelete(blogId);
        return res.status(201).json("successfully deleted Blog");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = { handelNewBlogPost, handelAllBlogPost, handelBlogById, handeleDeleteBlogById, handeleEditBlogById, handelAllAuthorBlogPost };
