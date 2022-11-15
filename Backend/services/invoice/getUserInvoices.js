import invoiceModel from './../../models/invoice.model.js';

let getUserInvoices=async(request,response)=>{
    let result=await invoiceModel.find({userId:request.userId},'-userId').populate('bookId','title auther')
    if(result.length>0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no invoice found"});
    }
    
   }
export default getUserInvoices;