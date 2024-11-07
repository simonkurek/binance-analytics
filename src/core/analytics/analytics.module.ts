import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { MarketDataModule } from '../market-data/market-data.module';
import { AnalyticsController } from './analytics.controller';

@Module({
  imports: [MarketDataModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
