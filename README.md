# book-app
mern stack project 
##App features:
###user can:
1. create account
2. sign in
3. make borrow request
###admin can:
1. add, update, read, and delete books
2. read all invoices
### some notes:
1. user can't borrow the same book twice in the same time
2. user can't borrow the book if it's the only copy left
3. books which have multipule copies will be found with yellow button
4. books which is the only copy will be found with gray button and disabled
5. when user borrow a book the button turns to green and number of this book decrease by one
6. when the invoice time ends the number of book which is borrowed increase by one
## what i used : 
### for frontend
- React.js 
- Joi for validation
- axios for APIs call
- bootstrap
- material ui
### for backend
- Node.js
- express.js
- mongoose
- Joi for validation
- jsonwebtoken for tokens
- bcrypt for hash password
- react-router-dom for routes

## try it: https://my-bookish-app.herokuapp.com/
