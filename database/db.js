import { Sequelize } from "sequelize";

const db = new Sequelize('blog_app', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;