import { Request, Response } from "express";
import createLoginService from "../services/login/login.service";
import { instanceToPlain } from "class-transformer"

const createLoginController = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const tokenUser = await createLoginService({email, password})
    return res.json(instanceToPlain(tokenUser))
}

export { createLoginController }