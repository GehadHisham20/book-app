import invoiceModel from './../../models/invoice.model.js';

let getInvoiceById=async(request,response)=>{
    const bookId=request.header('bookId')
    let result=await invoiceModel.findOne({bookId,userId:request.userId})
    if(result){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no invoice found"});
    }
    
   }
export default getInvoiceById;