import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from 'src/infrastructure/binance/binance.module';
import { SymbolHistoricEntry } from './market-data-change.schema';
import { MarketDataService } from './market-data.service';
import { MarketDataRepository } from './market-data.repository';

@Module({
  imports: [
    BinanceModule,
    MongooseModule.forFeature([
      { name: SymbolHistoricEntry.name, schema: SymbolHistoricEntry },
    ]),
  ],
  providers: [MarketDataService, MarketDataRepository],
  exports: [MarketDataService],
})
export class MarketDataModule {}
