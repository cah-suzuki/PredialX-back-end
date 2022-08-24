import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1661368239328 implements MigrationInterface {
    name = 'createTables1661368239328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cooperator" ("id" integer NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, CONSTRAINT "PK_cb06208604edacd1499f5dd5659" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cooperator"`);
    }

}
