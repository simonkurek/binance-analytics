import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { MarketDataModule } from '../market-data/market-data.module';
import { AnalyticsController } from './analytics.controller';

@Module({
  imports: [MarketDataModule],
  providers: [AnalyticsService],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
