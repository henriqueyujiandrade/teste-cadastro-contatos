import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import { IUserLogin, IUserToken} from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import "dotenv/config"

const createLoginService = async ({email, password}: IUserLogin): Promise<IUserToken> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            email: email
        }
    })
    
    if(!user){
        throw new AppError("Invalid email/password", 403)
    }

    const passwordMatch = await compare(password, user.password)
    
    if(!passwordMatch){
        throw new AppError("Invalid email/password", 403)
    }

    const token = jwt.sign({
            id: user.id,
            email: user.email
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: "1h"
        }
    )
    
    return {token,user}
}
export default createLoginService