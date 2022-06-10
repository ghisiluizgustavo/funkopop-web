const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')

router.use(express.json())
router.use('/v1', userRoutes)

module.exports = router