import mongoose, { set } from 'mongoose'
set("strictQuery", true)
const db = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    } catch (error) {
        console.error(error)
    }
}
export default db