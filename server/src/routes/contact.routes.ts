import Router from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controllers"
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware"


const contactRoutes = Router()

contactRoutes.post('',verifyAuthToken, createContactController)
contactRoutes.get('', verifyAuthToken, listContactController)
contactRoutes.patch('/:id', verifyAuthToken, updateContactController)
contactRoutes.delete('/:id',verifyAuthToken, deleteContactController)


export default contactRoutes