import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "admin", "instructor"], default: 'student' },
    studentAssignments: [{
        assignmentId: { type: Schema.Types.ObjectId, ref: 'assignment' },
        assignmentGrade: { type: String, enum: ['0', '25', '50', '75', '100'], default: '0' },
        assignmentStatus: { type: String, enum: ["new", "progress", "completed"], default: 'new' },
    }],
    studentLectures: [{
        lectureId: { type: Schema.Types.ObjectId, ref: 'lecture' },
        lectureStatus: { type: String, enum: ['upcoming', 'present', 'absent'], default: 'upcoming' },
    }]

}, {
    timestamps: true,
    versionKey: false
})

export const userModel = mongoose.model("user", userSchema)