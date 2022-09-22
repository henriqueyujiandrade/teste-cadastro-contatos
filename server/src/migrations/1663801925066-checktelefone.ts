import { MigrationInterface, QueryRunner } from "typeorm";

export class checktelefone1663801925066 implements MigrationInterface {
    name = 'checktelefone1663801925066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "CHK_829bd5fe5a1997db8520535317"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "CHK_314aeef7763ae0c881570fdd29" CHECK ("telefone" > 9999999)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "CHK_314aeef7763ae0c881570fdd29"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "CHK_829bd5fe5a1997db8520535317" CHECK ((telefone > 99999999))`);
    }

}
