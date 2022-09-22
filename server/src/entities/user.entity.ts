import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, Check, OneToMany } from "typeorm"
import { Exclude } from "class-transformer"
import { Contact } from "./contact.entity"

@Entity("users")
@Unique(["email"])
@Check(`"nome" LIKE '% %'`)
@Check(`"telefone" > 9999999`)
@Check(`"email" LIKE '%@%.com%'`)
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: number

    @Column()
    @Exclude()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany((type) => Contact, (contact) => contact.user, {eager:true})
    contacts: Contact[];
}

export { User }