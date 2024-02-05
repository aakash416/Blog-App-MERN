const { Router } = require("express")
const { validateSignUpRequest, validateLoginRequest } = require("../middleware/userMiddleware")
const { handleSignup, handleLogin } = require("../controllers/authUserController")
const userRoutes = Router();

// User Authentication Routes
userRoutes.post("/signup", validateSignUpRequest, handleSignup)
userRoutes.post("/login", validateLoginRequest, handleLogin)

module.exports = userRoutes;


