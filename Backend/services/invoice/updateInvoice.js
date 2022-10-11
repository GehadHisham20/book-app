import invoiceModel from './../../models/invoice.model.js';

let updateInvoice=async(request,response)=>{
    const {days}=request.body;
    let invoiceId=request.header('invoiceId')
    let invoice=await invoiceModel.findOne({_id:invoiceId})
    if(invoice){
        let endDate=new Date()
        endDate=endDate.setDate(invoice.startDate.getDate()+days)
        let result=await invoiceModel.findOneAndUpdate({_id:invoiceId},{endDate})
        if(result){
            response.json({message:"success"});
        }
       
    }
    else{
        response.json({message:"no invoice found"});
    }
    
    
   }
export default updateInvoice;