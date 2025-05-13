const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) throw new ExpressError(401, "Authentication Token Missing");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded, "decoded");
    const user = await User.findById(decoded.id).select("-password");
    // console.log(user);
    if (!user) throw new ExpressError(401, "User Not Found");
    req.user = user;
    next();
  } catch (error) {
    next(new ExpressError(401, "Unauthorized"));
  }
};

module.exports = { authUser };
