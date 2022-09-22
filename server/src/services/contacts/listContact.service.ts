import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"


const listContactsService = async (userId: string): Promise<Contact[]>  => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const contacts = await contactRepository.find({
    where:{
        user:{
            id:userId
        }
    }
 })

 return contacts
}

export default listContactsService