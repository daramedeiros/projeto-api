const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

app.all('*', function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use('/', index)
app.use('/alunas', alunas)
app.use("/professoras", professoras)


//exportando um modulo
module.exports = app


