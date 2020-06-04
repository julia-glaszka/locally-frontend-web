const bodyParser = require('body-parser')
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());



let { register } = require("./handlers/register.js")
let { login } = require("./handlers/login.js")
let { authorize } = require("./handlers/authorize.js")


// Register New User
server.post('/auth/register', register)




// Login to one of the users from ./users.json
server.post('/auth/login', login)

server.use(/^(?!\/auth).*$/, authorize)

server.use(router)

server.listen(8000, () => {
  console.log('Run Auth API Server')
})