const express = require("express")
const app = express()
const gameRouter = require('./routes/gameRoutes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

// Games
app.use('/', gameRouter)


// Homepage
app.get('/', (req, res) => {
	res.render('index',{title: 'Game Inventory Management App'})
	
})




app.listen(3000)