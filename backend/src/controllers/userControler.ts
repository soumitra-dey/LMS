import { Request, Response } from "express";
import { userModel } from "../models/userModel";


export const getUsers = (req: Request, res: Response) =>
    userModel.find().then(r => res.send(r));


export const loginUser = (req: Request, res: Response) => {

}

export const signupUser = (req: Request, res: Response) => {

}

