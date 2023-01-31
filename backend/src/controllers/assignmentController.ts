import { Request, Response } from "express";
import mongoose from "mongoose";
import { assignmentModel } from "../models/assignmentModel";
import { userModel } from "../models/userModel";


export const getAssignment = async (req: Request, res: Response) => {
    let { role } = req.UserDetails;
    if (role !== 'instructor') return res.status(403).send('unauthorised')
    try {
        // let user = await userModel.find().populate('studentAssignments.assignmentId').then((r) => r);
        res.send('success')
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
}

export const postAssignment = async (req: Request, res: Response) => {
    const { instructor, assignments, assignmentSubject } = req.body;
    let { role } = req.UserDetails;
    if (role !== 'instructor') return res.status(403).send('unauthorised')
    try {
        let newAssignment = new assignmentModel({ instructor, assignments, assignmentSubject });
        await newAssignment.save();
        let users = await userModel.updateMany({}, { $push: { studentAssignments: { assignmentId: newAssignment._id, } } })
        res.send(users)
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
}