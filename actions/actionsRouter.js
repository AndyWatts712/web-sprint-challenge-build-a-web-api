const express = require('express')
const router = express.Router()
const actionsDb = require('../data/helpers/actionModel')
const projDb = require('../data/helpers/projectModel')

router.get('/:id', (req, res) => {
    projDb.getProjectActions(req.params.id)
        .then(resp => {
            res.status(200).json({resp})
        })
})

router.post('/', (req, res) => {
    actionsDb.insert(req.body)
        .then(resp => {
            res.status(201).json({resp})
        })
})

router.put('/:id', (req, res) => {
    actionsDb.update(req.params.id, req.body)
        .then(resp => {
            res.status(201).json({resp})
        })
})

router.delete('/:id', (req, res) => {
    actionsDb.remove(req.params.id)
        .then(resp => {
            res.status(200).json({resp})
        })
})



module.exports = router