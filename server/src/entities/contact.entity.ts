import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, Check, ManyToOne } from "typeorm"
import { User } from "./user.entity"


@Entity("contacts")
@Check(`"nome" LIKE '% %'`)
@Check(`"telefone" > 9999999`)
@Check(`"email" LIKE '%@%.com%'`)
class Contact {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne((type) => User, (user) => user.contacts, {onDelete: "CASCADE"})
    user: User;
}

export { Contact }