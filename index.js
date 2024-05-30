// VERIFIQUE AS INSTRUÇÕES NO ARQUIVO "config/sequelize-config.js"

import express from 'express'
const app = express()
import connection from "./config/sequelize-config.js"
import produtosController from './controllers/produtosController.js'

connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

connection.query(`CREATE DATABASE IF NOT EXISTS minhaloja;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', produtosController)

const port = 8080
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro!" + error)
    } else {
        console.log("Servidor iniciado com sucesso em http://localhost:" + port)
    }
})