import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BinanceService } from 'src/infrastructure/binance/binance.service';
import { TRADING_SYMBOL } from './market-data.consts';
import { DailyStatsResult } from 'binance-api-node';

@Injectable()
export class MarketDataService {
  constructor(private readonly binance: BinanceService) {}

  @Cron('0 1 * * *')
  async fetchDailyMarketChange() {
    const data = await this.binance.getDailyStats(TRADING_SYMBOL);
    if (Array.isArray(data)) {
      const promises = data.map((symbol) => this.saveDifference(symbol));
      await Promise.all(promises);
      return;
    }
    await this.saveDifference(data);
  }

  private async saveDifference(symbolMarketData: DailyStatsResult) {}
}