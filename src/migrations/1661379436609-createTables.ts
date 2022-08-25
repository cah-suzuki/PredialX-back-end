import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1661379436609 implements MigrationInterface {
    name = 'createTables1661379436609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cooperator" ADD CONSTRAINT "UQ_efde8f3795774451cfae5ac169a" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cooperator" DROP CONSTRAINT "UQ_efde8f3795774451cfae5ac169a"`);
    }

}
