
import invoiceModel from './../../models/invoice.model.js';
import bookModel from './../../models/book.model.js';

let createInvoice=async (request,response)=>{
    const {days}=request.body;
    const bookId=request.header('bookId')
    let startDate=new Date();
    let endDate=new Date();
    endDate.setDate(startDate.getDate()+Number(days))
    let book= await bookModel.findOne({_id:bookId})
    if(book){
        if(book.quantity>1){
            await invoiceModel.insertMany({userId:request.userId,bookId,startDate,endDate})
            .then(async()=>{
                await bookModel.findOneAndUpdate({_id:bookId},{quantity:book.quantity-1})
                .then(()=>response.json({message:"success"}))
                .catch((error)=>response.json({message:"database error",error}))
            })
            .catch((error)=>response.json({message:"error in database",error}))
        }
        else{
            response.json({message:"can't borrow book as only one is available"});
        }

    }
    else{
        response.json({message:"no book found"});
    }
    
    
}
export default createInvoice;