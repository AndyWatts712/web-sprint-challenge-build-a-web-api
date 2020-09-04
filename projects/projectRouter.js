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

module.exports = router