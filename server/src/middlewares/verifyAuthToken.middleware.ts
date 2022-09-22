import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/AppError";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if(!token){
        throw new AppError("Token Authorization required", 401)        
    }
    const splitToken = token.split(" ")
    jwt.verify(splitToken[1], process.env.SECRET_KEY as string, (error: any, decoded: any) => {
        if(error){
            throw new AppError("Invalid Token", 401)
        }
        
        req.user = decoded.id
        req.email = decoded.email
        next()
    })
}
export default verifyAuthToken