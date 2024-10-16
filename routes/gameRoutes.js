const express = require("express")
const router = express.Router()

// Get all games
router.get('/', (req, res) => {
    res.render("games", {foobar: 'FOOBAR'})
})

// Get one game

// Create a game

// Update a game

// Delete a game

module.exports = router