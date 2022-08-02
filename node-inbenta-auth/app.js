const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = require('./route.js')


server.listen(port, hostname, () => console.log(`listening on port ${port}`))