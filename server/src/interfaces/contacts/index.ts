export interface IContactRequest{
    nome: string
    email: string
    telefone: number
}

export interface IContact {
    id: string
    nome: string
    email: string
    telefone: number
    createdAt: Date
    updatedAt: Date
}

export interface IUpdateContact{
    nome?: string
    email?: string
    telefone?: number
}
    