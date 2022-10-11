
import bookModel from './../../models/book.model.js';

let deleteBook=async(request,response)=>{
    let bookId=request.header('bookId')
    let result=await bookModel.deleteOne({_id:bookId})
    if(result.deletedCount===1){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no book found"});
    }
    
   }
export default deleteBook;