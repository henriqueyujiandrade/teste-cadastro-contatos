import { Request, Response, NextFunction  } from "express"
import createUserService from "../services/users/createUser.service"
import listUserService from "../services/users/listUser.service"
import { instanceToPlain } from "class-transformer"
import createLoginService from "../services/login/login.service"
import updateUserService from "../services/users/updateUser.service"
import deleteUserService from "../services/users/deleteUser.service"


const createUserController = async (req: Request, res: Response) => {     
        const { nome, email, password, telefone} = req.body
        const newUser = await createUserService({telefone, email, password, nome})           
        const tokenUser = await createLoginService({email:newUser.email, password})
        return res.json(instanceToPlain(tokenUser))          
}

const listUserControllers = async (req: Request, res: Response) => {   
        const {id} = req.params
        const users = await listUserService(id)
        return res.json(instanceToPlain(users))   
}

const updateUserController = async (req: Request, res: Response) => {
        const id = req.params.id;
        const newUser = req.body;
        const updatedUser = await updateUserService(id, newUser)        
        return res.status(200).json(instanceToPlain({user:updatedUser})) 
}

const deleteUserController = async (req: Request, res: Response) => {
        const id = req.params.id
        await deleteUserService(id)
        return res.status(200).json({message: "User deleted with success"})     
}



export { createUserController, listUserControllers, updateUserController, deleteUserController }