const checkPermission = (req, res, next) => {

  if (req.headers.authorization !== "admin") {
     return res.status(403).send({
      error: "Forbidden",
    });
  }
  next();
};

module.exports = checkPermission;
