const express = require("express")
const gameController = require('../controllers/gameController')
const gameRouter = express.Router()

// Get all games
gameRouter.get('/', gameController.gameListGet)
gameRouter.get('/add', gameController.gameAddGet)
gameRouter.post('/add', gameController.gameAddPost);


module.exports = gameRouter