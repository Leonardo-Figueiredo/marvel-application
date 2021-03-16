// duplication required to make TypeORM CLI work properly

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/**/entities/*.entity.ts',
    migrationsDir: 'src/migrations'
  }
}
