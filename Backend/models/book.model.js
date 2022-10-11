import mongoose from "mongoose";
const schema=mongoose.Schema({
    title:String,
    desc:String,
    auther:String,
    quantity:Number
},{
    timestamps: true
}
)

const bookModel=mongoose.model("book",schema);
export default bookModel;