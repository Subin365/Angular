const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "this string should be a pretty long string");
  } catch (error) {
    res.status(401).json({ message: "Auth Failed" });
  }
  next();
};
