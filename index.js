const express = require('express')
const server = express()
const projectRouter = require('./projects/projectRouter')
const actionsRouter = require('./actions/actionsRouter')
const port = process.env.PORT || 5000

server.use(express.json());

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionsRouter)

server.listen(port, () => {
    console.log('Server running')
})

module.exports = server