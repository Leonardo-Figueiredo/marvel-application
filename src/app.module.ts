import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      // migrations: ['./migrations/*.ts'],
      // cli: {
      //   entitiesDir: `${__dirname} /../**/*.entity{.ts,.js}`,
      //   migrationsDir: './migrations'
      // },
      synchronize: true // shouldn't be used in production
    }),
    UserModule
  ]
})
export class AppModule {}
