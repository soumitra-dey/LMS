import mongoose from "mongoose";

export const userModel = mongoose.model("user",
    new mongoose.Schema({
        email: { type: String },
        password: { type: String },
        role: { type: String, enum: ["", "", ""] }
    }))