const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function handleSignup(req, res) {
    try {
        
        const { firstName, lastName, email, password, phoneNumber } = req.body;
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
        console.log("Signup error:", err);
        res.status(500).json({ message: "Internal Server error" });
    }
}




async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser)
            return res.status(401).json({ message: "Invalid email id or password" });

        const isMatch = await bcryptjs.compare(password, existingUser.password);

        const Token = jwt.sign({ userId: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        const userData = {
            userId: existingUser._id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email,
            phoneNumber: existingUser.phoneNumber,
        }
        if (isMatch) {

            return res.cookie("token", Token).status(200).json({ Token, userData });
        }
        else
            return res.status(401).json({ message: "Invalid email id or password" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}


module.exports = { handleSignup, handleLogin };


