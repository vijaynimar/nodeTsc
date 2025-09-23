import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import {getPrismaClient} from "../../prisma/prisma-client.js"
import type { Request,Response } from "express";
const router=Router()
const prisma = getPrismaClient();
router.get("/health",(req:Request,res:Response)=>{
    res.send("this is health api only for checking it is working or not")
})

router.post("/addMovie",async(req:Request,res:Response)=>{
    console.log("request hitted")
    try{
        const {name,description,release}=req.body
        
        // Validate required fields
        if (!name || !description || !release) {
            return res.status(400).json({ 
                error: "Missing required fields: name, description, and release are required" 
            });
        }

        console.log("Creating movie with data:", { name, description, release });
        
        const createData=await prisma.movie.create({
            data: { name, description, release }
        });
        
        console.log("Movie created successfully:", createData);
        res.status(201).json({"success": true, "created":createData})
        
    }catch(error){
        console.log("Error in catch block:", error);
        res.status(500).json({ 
            error: "Failed to create movie", 
            details: error instanceof Error ? error.message : "Unknown error" 
        });
    }
})

router.get("/abc",(req,res)=>{
    res.json({"abd":"this is from api side"})
})
export default router