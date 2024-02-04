const { Router } = require("express")
const { handelNewBlogPost, handelAllBlogPost, handelBlogById, handeleDeleteBlogById, handeleEditBlogById, handelAllAuthorBlogPost } = require("../controllers/authBlogController")
const blogRoutes = Router();

// Blog Post Routes
blogRoutes.post("/", handelNewBlogPost)
blogRoutes.get("/", handelAllBlogPost)

blogRoutes.get("/myblog/:id", handelAllAuthorBlogPost)

blogRoutes.get("/:id", handelBlogById)
blogRoutes.put("/:id", handeleEditBlogById)
blogRoutes.delete("/:id", handeleDeleteBlogById)

module.exports = blogRoutes;


