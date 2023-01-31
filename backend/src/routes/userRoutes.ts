import express from "express";
import { getUsers, loginUser, signupUser } from "../controllers/userControler";

export const authRouter = express.Router();

authRouter.get("/", getUsers);
authRouter.post('/signup', signupUser)
authRouter.post('/login', loginUser)
