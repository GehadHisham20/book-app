import express from 'express'
import dbConnection from './config/dbConnection.js';
import userRouter from './api/user.api.js';
import bookRouter from './api/book.api.js';
import invoiceRouter from './api/invoice.api.js';
import cors from 'cors'
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use('/book',bookRouter)
app.use('/invoice',invoiceRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is running on on port ${port}!`))
dbConnection()