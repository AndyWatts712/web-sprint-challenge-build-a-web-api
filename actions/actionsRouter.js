const express = require('express')
const router = express.Router()
const actionsDb = require('../data/helpers/actionModel')
const projDb = require('../data/helpers/projectModel')

router.get('/:id', (req, res) => {
    projDb.getProjectActions(req.params.id)
        .then(resp => {
            res.status(200).json({resp})
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.post('/', (req, res) => {
    actionsDb.insert(req.body)
        .then(resp => {
            res.status(201).json({resp})
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.put('/:id', (req, res) => {
    actionsDb.update(req.params.id, req.body)
        .then(resp => {
            res.status(201).json({resp})
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.delete('/:id', (req, res) => {
    actionsDb.remove(req.params.id)
        .then(resp => {
            res.status(200).json({resp})
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})



module.exports = router