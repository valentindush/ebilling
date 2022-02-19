const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res)=>{

    res.sendFile(__dirname+'/public/index.html')
})


app.listen(3000, ()=>{console.log("server started")})
