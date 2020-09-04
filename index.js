const express = require('express')
const server = express()
const projectRouter = require('./projects/projectRouter')
const actionsRouter = require('./actions/actionsRouter')

server.use(express.json());

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionsRouter)

server.listen(5000, () => {
    console.log('Server running on 5000')
})

module.exports = server