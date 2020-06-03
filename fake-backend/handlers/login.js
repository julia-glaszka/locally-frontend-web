let { isAuthenticated, createToken } = require("./helpers/helpers.js")

function login(req, res) {
    console.log("login endpoint called; request body:");
    console.log(req.body);
    const {email, password} = req.body;
    if (isAuthenticated({email, password}) === false) {
      const status = 401
      const message = 'Incorrect email or password'
      res
        .status(status)
        .json({status, message})
      return
    }
    const access_token = createToken({email, password})
    console.log("Access Token:" + access_token);
    res
      .status(200)
      .json({access_token})
  }

module.exports = { login }