import Joi from "joi";

let schema = Joi.object({
      title: Joi.string().min(3).max(50).required(),
      desc: Joi.string().required(),
      auther: Joi.string().min(3).max(50).required(),
      quantity: Joi.number().integer().min(1).max(90).required(),
      });

    const bookValidation=(request,response,next)=>{
        let {error}=schema.validate(request.body, { abortEarly: false });
        if(error){
            response.json({message:'validation error',error:error.details});
        }
        else{
            next()
        }
        
    }

  export default bookValidation;