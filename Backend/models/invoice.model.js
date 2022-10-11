import mongoose from "mongoose";
const schema=mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    },
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    },
    startDate:Date,
    endDate:Date
}
)

const invoiceModel=mongoose.model("invoice",schema);
export default invoiceModel;