import mongoose from "mongoose";

export const userModel = mongoose.model("user",
    new mongoose.Schema({
        username: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["student", "admin", "instructor"], default: 'student' }
    }))