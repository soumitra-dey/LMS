import express from "express";
import { getUsers, signupUser } from "../controllers/userControler";

export const authRouter = express.Router();

authRouter.get("/", getUsers);

authRouter.post('/signup', signupUser )
