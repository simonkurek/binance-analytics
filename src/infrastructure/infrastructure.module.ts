import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from './binance/binance.module';

@Module({
  imports: [
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
    BinanceModule,
  ],
})
export class InfrastructureModule {}
