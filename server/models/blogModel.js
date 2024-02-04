const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    authorId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
}, { timestamps: true });

const BlogModel = model("blog", blogSchema);

module.exports = BlogModel;