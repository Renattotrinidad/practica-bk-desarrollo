import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import blogRoutes  from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

app.listen(8000, '172.26.15.45',()=>{
    console.log('Server UP running in http://172.26.15.45:8000/')
})