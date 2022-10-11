import mongoose from "mongoose";
const schema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number,
    phone:String,
    isAdmin:Boolean
}
)

const userModel=mongoose.model("user",schema);
export default userModel;