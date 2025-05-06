const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new ExpressError(401, "Authentication Token Missing");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select("-password");
    if (!user) throw new ExpressError(401, "User Not Found");
    req.user = user;
  } catch (error) {
    next(new ExpressError(401, "Unauthorized"));
  }
};

module.exports = { authUser };
