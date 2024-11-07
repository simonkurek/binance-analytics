import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { MarketDataModule } from '../market-data/market-data.module';

@Module({
  imports: [MarketDataModule],
  providers: [AnalyticsService],
  controllers: [Analytics],
})
export class AnalyticsModule {}
