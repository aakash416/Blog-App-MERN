
async function validateSignUpRequest(req, res, next) {
    try {
        if (!req.body.firstName || !req.body.email || !req.body.password || !req.body.phoneNumber) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function validateLoginRequest(req, res, next) {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = { validateSignUpRequest, validateLoginRequest }
