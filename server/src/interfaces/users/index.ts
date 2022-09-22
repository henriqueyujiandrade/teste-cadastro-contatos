import { User } from "../../entities/user.entity"

export interface IUserRequest {
    nome: string
    email: string
    password: string
    telefone: number
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserToken{
    user: User
    token: string
}

export interface IUpdateUser{
    nome?: string
    password?: string
    telefone?: number
}