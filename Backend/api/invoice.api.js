import express from 'express'
import addBook from './../services/book/addBook.js';
import adminAuth from './../middleware/authentication/admin.auth.js';
import loggingAuth from './../middleware/authentication/logging.auth.js';
import deleteInvoice from './../services/invoice/deleteInvoice.js';
import updateInvoice from './../services/invoice/updateInvoice.js';
import createInvoice from './../services/invoice/createInvoice.js';
import getInvoices from './../services/invoice/getInvoices.js';
import getInvoiceById from './../services/invoice/getInvoiceById.js';
import getUserInvoices from './../services/invoice/getUserInvoices.js';



const invoiceRouter=express.Router()
invoiceRouter.post('/',loggingAuth,createInvoice)
.delete('/',adminAuth,loggingAuth,deleteInvoice)
.patch('/',adminAuth,loggingAuth,updateInvoice)
.get('/',adminAuth,loggingAuth,getInvoices)
.get('/invoiceById',loggingAuth,getInvoiceById)
.get('/userInvoice',loggingAuth,getUserInvoices)

export default invoiceRouter;