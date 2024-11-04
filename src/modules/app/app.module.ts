import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "src/config/typeorm.config";

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig())],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}