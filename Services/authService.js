// Services/AuthService.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");

/**
 * Create JWT Token
 */
function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
}

/**
 * SIGNUP SERVICE
 */
async function signupService({ name, email, password, phone, address, gender, hobbies, country }) {

  // Validation
  if (!name || !email || !password || !phone || !address || !gender || !country) {
    const err = new Error("All fields except Hobbies are required");
    err.status = 400;
    throw err;
  }

  const normalizedEmail = String(email).toLowerCase().trim();

  // Check existing user
  const exist = await User.findOne({ email: normalizedEmail });
  if (exist) {
    const err = new Error("Email already registered");
    err.status = 409;
    throw err;
  }

  // Hash password
  const hashed = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email: normalizedEmail,
    password: hashed,
    phone,
    address,
    gender,
    hobbies: hobbies || [],
    country,
  });

  // Create JWT
  const token = createToken({ id: user._id });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      gender: user.gender,
      hobbies: user.hobbies,
      country: user.country,
    },
  };
}

/**
 * LOGIN SERVICE
 */
async function loginService({ email, password }) {
  
  if (!email || !password) {
    const err = new Error("Email and Password required");
    err.status = 400;
    throw err;
  }

  const normalizedEmail = String(email).toLowerCase().trim();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    const err = new Error("User not found");
    err.status = 401;
    throw err;
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    const err = new Error("Incorrect password");
    err.status = 401;
    throw err;
  }

  const token = createToken({ id: user._id });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      gender: user.gender,
      hobbies: user.hobbies,
      country: user.country,
    },
  };
}

module.exports = { signupService, loginService };
