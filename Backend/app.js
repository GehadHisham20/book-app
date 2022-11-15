import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import dbConnection from './config/dbConnection.js';
import userRouter from './api/user.api.js';
import bookRouter from './api/book.api.js';
import invoiceRouter from './api/invoice.api.js';
import { fileURLToPath } from 'url';
import path from 'path'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.use('/user',userRouter)
app.use('/book',bookRouter)
app.use('/invoice',invoiceRouter)
if(process.env.NODE_ENV==='production'){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*',(request,response)=>{

        response.sendFile(path.resolve(__dirname,'..','frontend','build','index.html'))})
}
app.listen(port, () => console.log(`Server is running on on port ${port}!`))
dbConnection()