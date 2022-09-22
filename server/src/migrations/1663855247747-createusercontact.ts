import { MigrationInterface, QueryRunner } from "typeorm";

export class createusercontact1663855247747 implements MigrationInterface {
    name = 'createusercontact1663855247747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435" UNIQUE ("telefone")`);
    }

}
