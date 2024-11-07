import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongoConfig from './mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongoConfig],
    }),
  ],
})
export class AppConfigModule {}
