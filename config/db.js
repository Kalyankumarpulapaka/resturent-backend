import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kalyankumarpulapaka:Kalyan8985@cluster0.nupa5fa.mongodb.net/tastebuds').then(()=>console.log("DB Connected"));
}