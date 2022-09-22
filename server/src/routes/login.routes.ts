import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";

const loginRoutes = Router()

loginRoutes.post('', createLoginController)

export default loginRoutes