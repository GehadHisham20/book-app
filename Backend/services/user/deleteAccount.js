import userModel from '../../models/user.model.js';

let deleteAccount=async(request,response)=>{
    let result=await userModel.deleteOne({_id:request.userId})
    if(result.deletedCount===1){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no user found"});
    }
    
   }
export default deleteAccount;