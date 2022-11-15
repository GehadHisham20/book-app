import jwt from 'jsonwebtoken';


const adminAuth=(request,response,next)=>{
    const token = request.header('token')
    jwt.verify(token, process.env.secretKey, async function(error, decoded) {
        if(error){
            response.json({message:"error in token",error}) 
        }
        else if(!decoded.isAdmin)
            response.json({message:"only admin allowed to deal with books"})
        else{
            request.isAdmin=decoded.isAdmin
            next()
        }

        
    });
}

export default adminAuth;