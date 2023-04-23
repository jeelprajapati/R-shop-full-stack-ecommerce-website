const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();


//verifytoken
const verifytoken = (req, res, next) => {
  try {
    
    const authHeader = req.headers.token;
    if (authHeader) {
      jwt.verify(authHeader, process.env.JWT_SEC, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  } catch (error) {
    console.log(error)
  }
};

//verify admin and token
const verifyTokenAndAdmin = (req, res, next) => {
  try {
    
    verifytoken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
    verifytoken,
    verifyTokenAndAdmin
  };
  