import { authMiddleware } from './../middleware/authMiddleware';
import { Request, Response, Router } from "express";
import { getAssignment, postAssignment } from "../controllers/assignmentController";
import { userModel } from "../models/userModel";

export const assignmentRouter = Router();
assignmentRouter.use(authMiddleware)

assignmentRouter.get('/', getAssignment)
assignmentRouter.post('/', postAssignment)


