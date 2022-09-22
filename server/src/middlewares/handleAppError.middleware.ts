import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const handleAppErrorMiddeware = (error: Error, req: Request, res: Response, _: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    if(error.message.includes('new row for relation')){
        return res.status(400).json({
            nome: "nome must be full name",
            email: "email must be a valid email",
            telefone: "telefone must have at least 8 numbers"
        })
    }

    if(error.message.includes('UQ_97672ac88f789774dd47f7c8be3')){
        return res.status(400).json({
            email: "email already exists",
            
        })
    }

    if(error.message.includes('UQ_3e8ba81fb64ba00f644d6a22435')){
        return res.status(400).json({
            telefone: "telefone already registered",
            
        })
    }

    if (error.name == "QueryFailedError")
    return res.status(400).json({
        message: error.message,
    })

    return res.status(500).json({
        message: 'internal server error'
    })
}

export default handleAppErrorMiddeware