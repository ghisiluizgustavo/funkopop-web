const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const funkoRoutes = require('./funkoRoutes')

router.use(express.json())
router.use('/user', userRoutes)
router.use('/funko', funkoRoutes)

module.exports = router