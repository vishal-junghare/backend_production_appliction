import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async()=>{
  try {
    const connetionInstance = await mongoose.connect(`${process.env.MANGOOB_URI}/${DB_NAME}`)
    console.log(`\MANGODB Connected:${connetionInstance.connection.host}`);

    
  }
  catch(E){
    console.error(E);
    process.exit(1);
  }
}


export default connectDB