const fs = require('fs')
let { isAuthenticated, createToken } = require("./helpers/helpers.js")

function register (req, res ) {
    console.log("register endpoint called; request body:");
    console.log(req.body);
    const {email, password} = req.body;
  
    if (isAuthenticated({email, password}) === true) {
      const status = 401;
      const message = 'Email and Password already exist';
      res
        .status(status)
        .json({status, message});
      return
    }
  
    fs.readFile("./users.json", (err, _data) => {
      if (err) {
        const status = 401
        const message = err
        res
          .status(status)
          .json({status, message})
        return
      };

      var data = JSON.parse(_data.toString());
      var new_id = data.users[data.users.length - 1].id + 1;
      data
        .users
        .push({
          id: new_id,
          email: email,
          password: password
        });
      var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => { // WRITE
        if (err) {
          const status = 401
          const message = err
          res
            .status(status)
            .json({status, message})
          return
        }
      });
      writeData();
    });
  
    // Create token for new user
    const access_token = createToken({email, password})
    console.log("Access Token:" + access_token);
    res
      .status(200)
      .json({access_token})
  }
  module.exports = {
      register
  }