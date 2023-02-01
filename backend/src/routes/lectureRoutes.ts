import { lectureModel } from './../models/lectureModel';
import { Router } from 'express';
import mongoose from 'mongoose';
import { authMiddleware } from '../middleware/authMiddleware';
import { userModel } from '../models/userModel';


export const lectureRouter = Router();
lectureRouter.use(authMiddleware)

lectureRouter.get('/', async (req, res) => {
    try {
        let users = await userModel.find()
        .populate('studentLectures.lectureId').then((r) => r);
        return res.send(users)
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
})

lectureRouter.post('/', async (req, res) => {
    const { instructor, lecture, lectureSubject, deadline } = req.body
    let { role } = req.UserDetails;
    if (role !== 'instructor') return res.status(403).send('unauthorised');
    try {
        let newLecture = new lectureModel({ instructor, lecture, lectureSubject, deadline });
        await newLecture.save();
        let users = await userModel.updateMany({}, { $push: { studentLectures: { lectureId: newLecture._id, } } })
        res.send(users)
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
})