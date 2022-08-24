import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1661370536515 implements MigrationInterface {
    name = 'createTables1661370536515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" integer NOT NULL, "issue_report" character varying(255) NOT NULL, "date" TIMESTAMP NOT NULL, "cooperatorId" integer, "clientId" integer, CONSTRAINT "REL_401cc87e3112d3a747179f6dd1" UNIQUE ("cooperatorId"), CONSTRAINT "REL_9b27855a9c2ade186e5c55d1ec" UNIQUE ("clientId"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_401cc87e3112d3a747179f6dd19" FOREIGN KEY ("cooperatorId") REFERENCES "cooperator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_401cc87e3112d3a747179f6dd19"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
