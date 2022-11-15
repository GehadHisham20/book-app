
import invoiceModel from './../../models/invoice.model.js';
import bookModel from './../../models/book.model.js';

let deleteInvoice=async(request,response)=>{
    let invoiceId=request.header('invoiceId')
    let invoice= await invoiceModel.findOne({_id:invoiceId}).populate('bookId','quantity')
   if(invoice){
    await bookModel.findOneAndUpdate({_id:invoice.bookId._id},{quantity:invoice.bookId.quantity+1})
    let result=await invoiceModel.deleteOne({_id:invoiceId})
    if(result.deletedCount===1){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no invoice found"});
    }   
}
 
    
   }
export default deleteInvoice;