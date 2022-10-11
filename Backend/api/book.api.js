import express from 'express'
import addBook from './../services/book/addBook.js';
import adminAuth from './../middleware/authentication/admin.auth.js';
import loggingAuth from './../middleware/authentication/logging.auth.js';
import deleteBook from './../services/book/deleteBook.js';
import updateBook from './../services/book/updateBook.js';
import getBooks from './../services/book/getBooks.js';
import filterBooks from './../services/book/filterBook.js';
import bookValidation from './../middleware/validation/book.validation.js';

const bookRouter=express.Router()
bookRouter.post('/',adminAuth,loggingAuth,bookValidation,addBook)
.delete('/',adminAuth,loggingAuth,deleteBook)
.put('/',adminAuth,loggingAuth,bookValidation,updateBook)
.get('/',getBooks)
.get('/filter',loggingAuth,filterBooks)
export default bookRouter;