import { Sequelize } from "sequelize";


const db = new Sequelize('blog_app', 'admin', 'admin123',{
    host: 'bd-practica.cxz6y94yupxo.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db;