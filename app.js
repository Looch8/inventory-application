const express = require("express")
const app = express()
const gamesRouter = require('./routes/gameRoutes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

// Games
app.use('/add', gamesRouter)


// Homepage
app.get('/', (req, res) => {
	res.render('index',{foo: 'Foo'})
	
})




app.listen(3000)