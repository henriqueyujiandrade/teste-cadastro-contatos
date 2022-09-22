import { User } from "../../entities/user.entity"
import AppDataSource from "../../data-source"
import { AppError } from "../../errors/AppError"

const listUserService = async (id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({ 
        where: {
        id: id
    }})

    if(!users){
        throw new AppError("user not found", 404)
    }

    return users

}

export default listUserService