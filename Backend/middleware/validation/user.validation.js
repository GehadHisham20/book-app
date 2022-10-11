import Joi from "joi";

let schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(15).required(),
      age: Joi.number().integer().min(10).max(90).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"))
      .messages({
        'string.pattern.base': `password must be minimum 8 characters and contain uppercase, lowercase, and number`
      }),
      phone:Joi.string().required().pattern(new RegExp ('^01[0125][0-9]{8}$'))
      .messages({
        'string.pattern.base': `incorrect phone format`
      }),
      isAdmin:Joi.boolean().required()
      });

    const userValidation=(request,response,next)=>{
        let {error}=schema.validate(request.body, { abortEarly: false });
        if(error){
            response.json({message:'validation error',error:error.details});
        }
        else{
            next()
        }
        
    }

  export default userValidation;