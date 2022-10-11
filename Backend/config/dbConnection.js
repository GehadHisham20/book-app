import mongoose from "mongoose";
const  dbConnection=()=>{
    mongoose.connect("mongodb+srv://gehad:gehad1999@cluster0.laq6fn3.mongodb.net/bookApp")
.then(()=>{
    console.log("database is connected...")
})
.catch((error)=> 
{
    console.log(error)
})
}
export default dbConnection;