import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodos1691327523531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE todos (id SERIAL PRIMARY KEY, title VARCHAR(255), description TEXT);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todos"`);
  }
}
