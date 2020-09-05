const express = require('express')
const projDb = require('../data/helpers/projectModel')
const router = express.Router()

router.get('/', (req, res) => {
    projDb.get()
        .then((resp) => {
            res.status(200).json({ resp })
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
})

router.post('/', (req, res) => {
    projDb.insert(req.body)
        .then((resp) => {
            res.status(201).json({ resp })
        })
        .catch((err) => {
            res.status(500).json({ error: err })
        })
})

router.put('/:id', validateProjectID(), (req, res) => {
    projDb.update(req.params.id, req.body)
        .then((resp) => {
            res.status(200).json({ resp })
        })
        .catch((err) => {
            res.status(500).json({ error: err })
        })
})

router.delete('/:id', (req, res) => {
    projDb.remove(req.params.id)
        .then(resp => {
            res.status(200).json({ resp })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

//Middleware
function validateProjectID() {
    return function (req, res, next) {
        projDb.get(req.params.id)
            .then((project) => {
                if (project) {
                    req.project = project
                    next()
                } else {
                    res.status(400).json({ message: "ID not found dude." })
                }
            })
            .catch(err => res.status(500).json({error: error}))


    }
}

module.exports = router