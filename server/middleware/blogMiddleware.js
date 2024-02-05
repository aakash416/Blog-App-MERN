


async function validateBlogPostRequest(req, res, next) {
    try {
        if (!req.body.title || !req.body.body || !req.body.authorId) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


async function validateCheckId(req, res, next) {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: "Please provide id" });
        }
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = { validateBlogPostRequest, validateCheckId }