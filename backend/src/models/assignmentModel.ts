import { Schema, model } from "mongoose";

const assignmentSchema = new Schema({
    instructor: { type: String, required: true },
    assignments: {
        type: [String],
        required: true
    },
    assignmentSubject: {
        type: String,
        enum: ['dsa', 'coding', 'csbt'],
        required: true
    },
    deadline: { type: Date }
}, {
    timestamps: true,
    versionKey: false
})

export const assignmentModel = model("assignment", assignmentSchema)