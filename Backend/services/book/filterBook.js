import bookModel from './../../models/book.model.js';

let filterBooks=async(request,response)=>{
    const {auther}=request.body
    let result=await bookModel.find({auther:{ $regex: '.*' + auther + '.*' }})
    if(result.length>0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no book found"});
    }
    
   }
export default filterBooks;