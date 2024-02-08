const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
}, { timestamps: true });

const BlogModel = model("blog", blogSchema);

module.exports = BlogModel;