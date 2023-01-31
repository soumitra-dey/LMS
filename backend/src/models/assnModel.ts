import mongoose from "mongoose";


export const assnModel=mongoose.model("assignment", 
    new mongoose.Schema({
        instructor:{
            type:String,
            required:true
        },
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true
        },
        Name:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        progress:{
            type:String,
            required:true
        },
        score:{
            type:String,
            required:true
        },
        student:{
            type:String
        }
    })
)

