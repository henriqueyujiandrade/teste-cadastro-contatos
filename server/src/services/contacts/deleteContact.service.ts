import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"

const deleteContactService = async (id: string,userId: string): Promise<void> =>{
  const contactRepository = AppDataSource.getRepository(Contact)
  const contact = await contactRepository.findOne({where: {
    id: id,
    user:{
        id:userId
    }
}})

  if(!contact){
    throw new AppError("Contact not found in your Contacts list or already deleted", 404)
  }
  
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Contact)
  .where("id = :id", {id})
  .execute()
}

export default deleteContactService