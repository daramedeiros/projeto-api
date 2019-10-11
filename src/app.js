const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

app.all('*', function(req, resp, next){
    console.log('Ihhhh deu erro!!')
    next()
})

app.use('/', index)
app.use('/alunas', alunas)
app.use("/professoras", professoras)


//exportando um modulo
module.exports = app


