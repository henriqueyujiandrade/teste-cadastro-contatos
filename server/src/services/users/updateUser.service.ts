import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUpdateUser } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";
import { AppError } from "../../errors/AppError";

const updateUserService = async (id: string, user: IUpdateUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where:{
        id: id
    },   
  })

  if (!findUser) {
    throw new AppError("Post not found", 404);
  }

  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
    findUser.password = user.password  
  } 

  if (user.nome) {
    findUser.nome = user.nome
  } 

  if (user.telefone) {
    findUser.telefone = user.telefone
  }

  await userRepository.save(findUser);  
  return findUser;

}

export default updateUserService