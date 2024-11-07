import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BinanceService } from 'src/infrastructure/binance/binance.service';
import { TRADING_SYMBOL } from './market-data.consts';
import { DailyStatsResult } from 'binance-api-node';
import { MarketDataRepository } from './market-data.repository';

@Injectable()
export class MarketDataService implements OnModuleInit {
  constructor(
    private readonly binance: BinanceService,
    private readonly repository: MarketDataRepository,
  ) {}

  @Cron('0 1 * * *')
  async fetchDailyMarketChange() {
    const data = await this.binance.getDailyStats(TRADING_SYMBOL);
    if (Array.isArray(data)) {
      const promises = data.map((symbol) => this.saveEntry(symbol));
      await Promise.all(promises);
      return;
    }
    await this.saveEntry(data);
  }

  async getEntries(symbolName: string, fromDate: Date) {
    return await this.repository.getHistoricData(symbolName, fromDate);
  }

  private async saveEntry(symbolMarketData: DailyStatsResult) {
    const dailyChangePercent = +symbolMarketData.priceChangePercent;
    const lastPrice = +symbolMarketData.lastPrice;
    if (!dailyChangePercent || !lastPrice) {
      throw new Error('BinanceAPI: Invalid priceChange or lastPrice');
    }
    await this.repository.create({
      symbol: symbolMarketData.symbol,
      dailyChangePercent,
      lastPrice,
    });
  }

  async onModuleInit() {
    await this.fetchDailyMarketChange();
  }
}
