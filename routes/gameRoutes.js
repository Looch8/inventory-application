const express = require("express")
const router = express.Router()

// Get all games
router.get('/', (req, res) => {
    res.render("addGame", {foobar: 'FOOBAR'})
})

// Get one game

// Create a game
router.post('/', (req, res) => {

})

// Update a game

// Delete a game

module.exports = router