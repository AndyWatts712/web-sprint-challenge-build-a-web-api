const express = require('express')
const server = express()
const projDb = require('./data/helpers/projectModel')
const projectRouter = require('./projects/projectRouter')
server.use(express.json());

server.use('/api/projects', projectRouter)

server.listen(5000, () => {
    console.log('Server running on 5000')
})

module.exports = server