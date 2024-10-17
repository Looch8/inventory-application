const gameStorage = require("../storages/gameStorage")

exports.gameAddPost = (req, res) => {
    const {gameName, genre} = req.body;
    gameStorage.addGame({gameName, genre})
    res.redirect('/')
}

exports.gameAddGet = (req, res) => {
    res.render('addGame', {
        title: "Add Game",
    })
}

exports.gameListGet = (req, res) => {
    res.render('index', {
        title: "Games List",
        games: gameStorage.getGames()
    })
}