const express = require("express")
const app = express()
const gamesRouter = require('./routes/gameRoutes')

app.set('view engine', 'ejs')


// Homepage
app.get('/', (req, res) => {
	res.render('index',{foo: 'Foo'})
	
})


// Games
app.use('/games', gamesRouter)

app.listen(3000)