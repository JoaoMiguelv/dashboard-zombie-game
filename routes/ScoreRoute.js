const express = require('express')
const router = express.Router()
const ScoreController = require('../controllers/ScoreController')
const scoreController = new ScoreController()

router.get('/', scoreController.find)

module.exports = router