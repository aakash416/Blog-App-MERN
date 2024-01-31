const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    author: { type: String, require: true, trim: true }
}, { timestamps: true });

const BlogModel = model("blog", blogSchema);

module.exports = BlogModel;