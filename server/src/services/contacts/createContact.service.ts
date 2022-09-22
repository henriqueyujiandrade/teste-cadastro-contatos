import { IContact, IContactRequest} from "../../interfaces/contacts";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { Contact } from "../../entities/contact.entity";


const createContactService = async (
  { nome, email, telefone }: IContactRequest,
  userId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where:{
      id: userId
    }
  }) 

  if(!user){
    throw new AppError("user not found", 404)
  }

  const contact = {
    user,
    nome,
    email,
    telefone
  }

  const newContact = contactRepository.create(contact);

  await contactRepository.save(newContact);

  return {
    id:newContact.id,
    nome: newContact.nome,
    email: newContact.email,
    telefone: newContact.telefone,
    createdAt: newContact.createdAt,
    updatedAt: newContact.updatedAt
  }
};

export default createContactService;