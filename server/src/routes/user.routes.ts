import Router from "express"
import { createUserController, listUserControllers, updateUserController } from "../controllers/user.controllers"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('/:id', listUserControllers)
userRoutes.patch('/:id', updateUserController)

export default userRoutes