import bookModel from './../../models/book.model.js';

let updateBook=async(request,response)=>{
    const {title,desc,auther,quantity}=request.body;
    const bookId=request.header('bookId')
    let result=await bookModel.findOneAndUpdate({_id:bookId},{title,desc,auther,quantity})
    if(result){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no book found"});
    }
    
   }
export default updateBook;