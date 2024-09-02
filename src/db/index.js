import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async()=>{
  try {
    const connetionInstance = await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
    console.log(`MangoDb Connect !! DB HOST :${connetionInstance.connection.host}`)
  }
  catch(E){
    console.error(`mango:${E}`);
    process.exit(1);
  }
}


export default connectDB