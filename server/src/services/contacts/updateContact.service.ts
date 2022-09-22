import AppDataSource from "../../data-source";
import { Contact} from "../../entities/contact.entity";
import { IUpdateContact } from "../../interfaces/contacts";
import { AppError } from "../../errors/AppError";

const updateContactService= async (id: string, userId: string, contact: IUpdateContact) => {
    const contactRepository = AppDataSource.getRepository(Contact);
  
    const findContact = await contactRepository.findOne({
      where:{
          id: id,
          user:{
            id:userId
          }
      }   
    })
    
    if (!findContact) {
      throw new AppError("Contact not found in your contacts list", 404);
    }
  
    if (contact.email) {
      findContact.email = contact.email  
    } 
  
    if (contact.nome) {
      findContact.nome = contact.nome
    } 
  
    if (contact.telefone) {
      findContact.telefone = contact.telefone
    }
  
    await contactRepository.save(findContact)  
    return findContact  
  }
  
  export default updateContactService