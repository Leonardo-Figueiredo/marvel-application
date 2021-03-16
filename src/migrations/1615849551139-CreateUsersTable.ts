import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersTable1615849551139 implements MigrationInterface {
  private readonly userTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      },
      {
        name: 'email',
        type: 'varchar',
        isUnique: true
      },
      {
        name: 'password',
        type: 'varchar'
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(this.userTable)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"')

    await queryRunner.dropTable(this.userTable)
  }
}
