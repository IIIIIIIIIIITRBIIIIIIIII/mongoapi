import { Router } from "express";
import { User } from "../modules/User.js";
import  express  from "express";

const router = Router()

router.get("/found", async(req,res)=>{
    try {
        let result = await User.find()
        res.send({User:result,msg:"user founded"})

    } catch (error) {
        console.log(error)
    }

})

router.post("/add", async(req,res)=>{
    try {
        let newUser = new User(req.body)
        let result = await newUser.save()
        res.send({User:result,msg:"user added"})

    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    try {
        let result = await User.findById({_id:req.params.id})
        res.send({User:result,msg:"user is good"})

    } catch (error) {
        console.log(error)
    }

})

router.delete("/:id", async(req,res)=>{
    try {
        let result = await User.findByIdAndDelete({_id:req.params.id})
        res.send({User:result,msg:"user deleted successfully"})

    } catch (error) {
        console.log(error)
    }

})

router.put("/:id", async(req,res)=>{
    try {
        let result = await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({User:result,msg:"user deleted successfully"})

    } catch (error) {
        console.log(error)
    }

})

export default router