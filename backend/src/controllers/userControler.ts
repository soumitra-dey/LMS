import mongoose from 'mongoose';
import { Request, Response } from "express";
import { userModel } from "../models/userModel";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const getUsers = (req: Request, res: Response) =>
    userModel.find().then(r => res.send(r));


export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const verification = await userModel.findOne({ email });
        if (await argon2.verify(verification?.password || '', password)) {
            let token = jwt.sign({ email: verification?.email, username: verification?.username, role: verification?.role }, process.env.TOKEN || '')
            res.send({
                message: 'Login successful!',
                token
            })
        } else {
            return res.status(403).send('Invalid credentials')
        }
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
}

export const signupUser = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body
    try {
        const hash = await argon2.hash(password)
        let newUser = new userModel({ username, email, password: hash, role })
        await newUser.save();
        return res.status(201).send('Signup successful!')
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }
}

