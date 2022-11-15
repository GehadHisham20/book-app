import jwt from 'jsonwebtoken';


const loggingAuth=(request,response,next)=>{
    const token = request.header('token')
    jwt.verify(token, process.env.secretKey, async function(error, decoded) {
        if(error){
            response.json({message:"error in token",error}) 
        }
        else{
            request.userId=decoded.userId
            next()
        }
    });
}

export default loggingAuth;