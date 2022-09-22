import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, Check } from "typeorm"
import { Exclude } from "class-transformer"

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
}

export { User }