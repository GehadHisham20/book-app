
import bookModel from './../../models/book.model.js';

let addBook=async (request,response)=>{
    const {title,desc,auther,quantity}=request.body
        await bookModel.insertMany({title,desc,auther,quantity})
        .then(()=>response.json({message:"success"}))
        .catch((error)=>response.json({message:"error in database",error}))
    
}
export default addBook;