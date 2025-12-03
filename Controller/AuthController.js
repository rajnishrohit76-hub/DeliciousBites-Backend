// Controllers/AuthController.js

const { signupService, loginService } = require("../Services/authService");


const signup = async (req, res) => {
  try {
    const result = await signupService(req.body);
    return res.status(201).json({ token: result.token, user: result.user });
  } catch (err) {
    console.error("Signup Error:", err.message);
    return res.status(err.status || 500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await loginService(req.body);
    return res.status(200).json({ token: result.token, user: result.user });
  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(err.status || 500).json({ message: err.message });
  }
};

module.exports = { signup, login };
