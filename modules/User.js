import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    discription: String,
})

export const User = mongoose.model("User", userSchema)

