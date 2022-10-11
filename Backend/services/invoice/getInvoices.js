import invoiceModel from './../../models/invoice.model.js';

let getInvoices=async(request,response)=>{
    let result=await invoiceModel.find().populate('userId').populate('bookId')
    if(result.length>0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no invoice found",result});
    }
    
   }
export default getInvoices;