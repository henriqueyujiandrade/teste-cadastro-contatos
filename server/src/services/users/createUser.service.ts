import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { hash } from "bcryptjs"

const createUserService = async ({ telefone, email, nome, password }: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        email,
        nome,
        telefone,
        password: hashedPassword,
    })

    await userRepository.save(user)
    
    return user

}

export default createUserService