// VERIFIQUE AS INSTRUÇÕES NO ARQUIVO "config/sequelize-config.js"

import express from 'express'
const app = express()
import connection from "./config/sequelize-config.js"
import produtosController from './controllers/produtosController.js'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname para ES6 módulos
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Defina o diretório estático para servir arquivos
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', produtosController)

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

const port = 8080
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro!" + error)
    } else {
        console.log("Servidor iniciado com sucesso em http://localhost:" + port)
    }
})