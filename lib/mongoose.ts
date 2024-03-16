import mongoose from 'mongoose';

let isConnected : boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);  
    
    if(!process.env.MONGODB_URL){
        return console.log("MISSING MONGODB_URL");
    }

    if(isConnected){
          return 
            }
    
}
