import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1661360632271 implements MigrationInterface {
    name = 'createTables1661360632271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" integer NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
