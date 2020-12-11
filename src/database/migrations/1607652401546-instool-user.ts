import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class instoolUser1607652401546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'instool_users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'full_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'biography',
            type: 'varchar',
          },
          {
            name: 'location',
            type: 'varchar',
          },
          {
            name: 'is_joined_recently',
            type: 'boolean',
          },
          {
            name: 'is_private',
            type: 'boolean',
          },
          {
            name: 'has_channel',
            type: 'boolean',
          },
          {
            name: 'is_business_account',
            type: 'boolean',
          },
          {
            name: 'followed_by',
            type: 'integer',
          },
          {
            name: 'follow',
            type: 'integer',
          },
          {
            name: 'timeline_media_count',
            type: 'integer',
          },

          {
            name: 'liked_by_count',
            type: 'varchar',
          },
          {
            name: 'comments_count',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('instool_users');
  }
}
