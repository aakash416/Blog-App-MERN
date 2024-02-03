const { Router } = require("express")
const { handleSignup, handleLogin } = require("../controllers/authUserController")
const userRoutes = Router();

// User Authentication Routes
userRoutes.post("/signup", handleSignup)
userRoutes.post("/login", handleLogin)

module.exports = userRoutes;


