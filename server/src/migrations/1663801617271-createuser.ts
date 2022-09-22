import { MigrationInterface, QueryRunner } from "typeorm";

export class createuser1663801617271 implements MigrationInterface {
    name = 'createuser1663801617271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "CHK_131d3685e8e88e71d01c2b9891" CHECK ("email" LIKE '%@%.com%'), CONSTRAINT "CHK_829bd5fe5a1997db8520535317" CHECK ("telefone" > 99999999), CONSTRAINT "CHK_3f0f17de8807cc4ba330ae7315" CHECK ("nome" LIKE '% %'), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
