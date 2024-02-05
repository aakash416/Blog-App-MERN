const { Router } = require("express")
const { validateBlogPostRequest, validateCheckId } = require("../middleware/blogMiddleware");
const { handelNewBlogPost, handelAllBlogPost, handelBlogById, handeleDeleteBlogById, handeleEditBlogById, handelAllAuthorBlogPost } = require("../controllers/authBlogController")
const blogRoutes = Router();

// Blog Post Routes
blogRoutes.post("/", validateBlogPostRequest, handelNewBlogPost)
blogRoutes.get("/", handelAllBlogPost)

blogRoutes.get("/myblog/:id", validateCheckId, handelAllAuthorBlogPost)

blogRoutes.get("/:id", validateCheckId, handelBlogById)
blogRoutes.put("/:id", validateCheckId, handeleEditBlogById)
blogRoutes.delete("/:id", validateCheckId, handeleDeleteBlogById)

module.exports = blogRoutes;


