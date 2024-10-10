import Sequelize from "sequelize"
import connection from "../config/sequelize-config.js" 

const Produto = connection.define('produtos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Produto.sync({force: false})

export default Produto