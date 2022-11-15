import mongoose from "mongoose";
const  dbConnection=()=>{
    mongoose.connect(process.env.DBCONNECTION)
.then(()=>{
    console.log("database is connected...")
})
.catch((error)=> 
{
    console.log(error)
})
}
export default dbConnection;