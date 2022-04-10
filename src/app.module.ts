import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationPipe } from './common/pipe/validate.pipe';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './common/config';

console.log('-==-env-=-', env.DATABASE_CONFIG);
@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG), UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
