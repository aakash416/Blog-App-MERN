const { Router } = require("express")
const { handleSignup, handelLogin, handelNewblogpost, handelAllblogpost, handelBlogbyId, handeleDeleteBlogById, handeleEditeBlogById } = require("../controllers/authController")
const authRoute = Router();


authRoute.post("/signup", handleSignup)
authRoute.post("/login", handelLogin)
authRoute.post("/newblogpost", handelNewblogpost)
authRoute.get("/allblogpost", handelAllblogpost)
authRoute.get("/blogbyid/:blogId", handelBlogbyId)
authRoute.put("/blogbyid/:blogId", handeleEditeBlogById)
authRoute.delete("/blogbyid/:blogId", handeleDeleteBlogById)

module.exports = authRoute;


