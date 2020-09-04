const express = require('express')
const projDb = require('../data/helpers/projectModel')
const router = express.Router()

router.get('/', (req, res) => {
    projDb.get()
        .then((resp) => {
            res.status(200).json({resp})
        })
        .catch((err) => {
            res.status(400).json({error: err})
        })
})

router.post('/', (req, res) => {
    projDb.insert(req.body)
        .then((resp) => {
            res.status(201).json({resp})
        })
        .catch((err) => {
            res.status(500).json({error: err})
        })
})

router.put('/:id', (req, res) => {
    projDb.update(req.params.id, req.body)
        .then((resp) => {
            res.status(200).json({resp})
        })
        .catch((err) => {
            res.status(500).json({error: err})
        })
})

router.delete('/:id', (req, res) => {
    projDb.remove(req.params.id)
        .then(resp => {
            res.status(200).json({resp})
        })
})

module.exports = router