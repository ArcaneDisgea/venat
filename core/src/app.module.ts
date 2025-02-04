import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { BotModule } from './bot/bot.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ModuleLoader } from './module-system/module.loader';
import { SentryModule } from './sentry/sentry.module';

@Module({
  imports: [
    NestConfigModule.forRoot(),
    SentryModule,
    DatabaseModule,
    UsersModule,
    BotModule,
    ModuleLoader.findAndLoadModules(),
  ],
})
export class AppModule {}
