import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './User/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule,

    // Configuration For Enviorement  Variables
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.user.env'
    }),
    
    TypeOrmModule.forRoot({
      type:process.env.DB_TYPE as any,
      host : process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [users],
      synchronize: true,

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
