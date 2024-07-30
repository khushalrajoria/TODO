const UserService = require('../services/user_services');

exports.register = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body); // Log the request body
        const { email, password } = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
        console.error("Error:", error);
        next(error);
    }
}
