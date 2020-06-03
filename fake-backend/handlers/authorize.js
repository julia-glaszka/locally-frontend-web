let { verifyToken } = require("./helpers/helpers.js")

function authorize (req, res, next) {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Error in authorization format'
      res
        .status(status)
        .json({status, message})
      return
    }
    try {
      let verifyTokenResult;
      verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
  
      if (verifyTokenResult instanceof Error) {
        const status = 401
        const message = 'Access token not provided'
        res
          .status(status)
          .json({status, message})
        return
      }
      next()
    } catch (err) {
      const status = 401
      const message = 'Error access_token is revoked'
      res
        .status(status)
        .json({status, message})
    }
  }

  module.exports = {
      authorize
  }