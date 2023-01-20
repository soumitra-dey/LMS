import express from "express";
import { getUsers } from "../controllers/userControler";

export const userRouter = express.Router();

userRouter.get("/", getUsers);