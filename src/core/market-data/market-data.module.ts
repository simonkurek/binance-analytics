import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from 'src/infrastructure/binance/binance.module';

@Module({
  imports: [BinanceModule, MongooseModule.forFeature()],
})
export class MarketDataModule {}
