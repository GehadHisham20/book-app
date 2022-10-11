import bookModel from './../../models/book.model.js';

let getBooks=async(request,response)=>{
    let result=await bookModel.find()
    if(result.length>0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no book found",result});
    }
    
   }
export default getBooks;