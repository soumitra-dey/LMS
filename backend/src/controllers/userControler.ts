import { Request, Response } from "express";
import { userModel } from "../models/userModel";
import argon2 from 'argon2';


export const getUsers = (req: Request, res: Response) =>
    userModel.find().then(r => res.send(r));


export const loginUser = (req: Request, res: Response) => {

}

export const signupUser = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body
    try {
        const hash = await argon2.hash(password)
        let newUser = new userModel({ username, email, password: hash, role })
        await newUser.save();
        return res.status(201).send('Signup successful!')
    } catch (err: any) {
        return res.status(501).send(err.message)
    }
}

