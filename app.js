import {User}  from "./modules/User.js"
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import router from "./router/router.js";
import db from "./config/db.js";

const app = express()
dotenv.config()
app.use(express.json())
app.use("/",router)
const port = process.env.PORT
db()

app.listen(port, (er)=>er ? console.error(er) : console.log(`http://localhost:${port}`))