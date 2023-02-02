import { authMiddleware } from './../middleware/authMiddleware';
import { Router } from "express";
import { getAssignment, postAssignment } from "../controllers/assignmentController";

export const assignmentRouter = Router();
assignmentRouter.use(authMiddleware)

assignmentRouter.get('/', getAssignment)
assignmentRouter.post('/', postAssignment)


