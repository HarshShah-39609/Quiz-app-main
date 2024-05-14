import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { users } from "./user.entity";


@Module({
    imports : [TypeOrmModule.forFeature([users])],
    controllers : [UserController],
    providers : [UserService]
})

export  class UserModule {}