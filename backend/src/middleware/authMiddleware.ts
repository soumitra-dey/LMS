

import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import jwt, { Secret } from 'jsonwebtoken'
import 'dotenv/config'

const secretKey: Secret = process.env.TOKEN as string

declare global {
    namespace Express {
        interface Request {
            UserDetails: any,
            // UserDetails: string | jwt.JwtPayload,
        }
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { token }: jwt.JwtPayload = req.headers;
    if (!token) return res.status(401).send('invalid token!');

    try {

        let verify = jwt.verify(token, secretKey);
        if (!verify) return res.status(403).send('unauthorised');
        req['UserDetails'] = verify;
        next()

    } catch (err:any) {
        console.log(err.message)
        if (err instanceof mongoose.Error.ValidationError) return res.send(err.message);
        else return res.status(501).send("internal server error");
    }

}
