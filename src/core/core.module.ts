import { Module } from '@nestjs/common';
import { AnalyticsModule } from './analytics/analytics.module';
import { MarketDataModule } from './market-data/market-data.module';

@Module({
  imports: [AnalyticsModule, MarketDataModule],
})
export class CoreModule {}
