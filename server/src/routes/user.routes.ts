import Router from "express"
import { createUserController, deleteUserController, listUserControllers, updateUserController } from "../controllers/user.controllers"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('/:id', listUserControllers)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)


export default userRoutes