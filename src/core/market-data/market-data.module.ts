import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from 'src/infrastructure/binance/binance.module';
import { SymbolHistoricEntry } from './market-data-change.schema';

@Module({
  imports: [
    BinanceModule,
    MongooseModule.forFeature([
      { name: SymbolHistoricEntry.name, schema: SymbolHistoricEntry },
    ]),
  ],
})
export class MarketDataModule {}
