let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("Without admin permissions");
  }

  next();
};

module.exports = { admin };
