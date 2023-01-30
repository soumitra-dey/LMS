import { Schema, model } from "mongoose";

const lectureSchema = new Schema({
    instructor: { name: String },
    lecture: {
        type: String,
        required: true
    },
    lectureSubject: {
        type: String,
        enum: ['dsa', 'coding', 'csbt'],
        required: true
    },
    deadline: { type: Date }
}, {
    timestamps: true,
    versionKey: false
})

export const lectureModel = model("lecture", lectureSchema)