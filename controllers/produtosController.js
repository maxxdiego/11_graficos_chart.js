import express from 'express'
const router = express.Router()
import Produto from '../models/Produto.js'

// PRIMEIRO EXEMPLO (NO SCRIPT SERÁ UTILIZADO O FETCH() )
router.get("/produtos", async (req, res) => {
    res.render("produtos")
})

router.get("/getProdutos", async (req, res) => {
    try {
        const produtos = await Produto.findAll()
        res.json(produtos)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao buscar produtos' })
    }
})
// VIEW: "produtos"
// FIM DO PRIMEIRO EXEMPLO


// SEGUNDO EXEMPLO (SERÁ PASSADO A VARIÁVEL EJS PARA PÁGINA)
router.get("/meusProdutos", async (req, res) => {
    try {
        const produtos = await Produto.findAll()
        res.render("meusprodutos", {
            produtos : produtos
        })
    } catch (error) {
        console.log(error)
    } 
})
// VIEW: "meusprodutos"
// FIM DO SEGUNDO EXEMPLO
    
export default router