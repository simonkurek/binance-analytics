import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const config = configService.getOrThrow('mongodb');
        return {
          uri: config.uri,
          ...config.options,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class CommonModule {}
