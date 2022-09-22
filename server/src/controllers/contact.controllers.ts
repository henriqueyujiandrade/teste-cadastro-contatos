
import {Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactsService from "../services/contacts/listContact.service";
import updateContactService from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
    const userId = req.user
    const { nome,email,telefone} = req.body
    const contact = await createContactService({ nome,email,telefone }, userId)
    return res.status(201).json(contact)  
}

const listContactController = async (req:Request, res: Response) => {
     const userId = req.user;
     const contacts = await listContactsService(userId)
     return res.json(contacts)       
}

const updateContactController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const userId = req.user;
    const newContact = req.body;
    const updatedContact = await updateContactService(id,userId, newContact)        
    return res.status(200).json(updatedContact) 
}

const deleteContactController = async (req: Request, res: Response) => {
    const id = req.params.id
    const userId = req.user;
    await deleteContactService(id, userId)
    return res.status(200).json({message: "Contact deleted with success"})     
}

export {createContactController, listContactController, updateContactController, deleteContactController}