import { Injectable } from '@nestjs/common';
import { MarketDataService } from '../market-data/market-data.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly market: MarketDataService) {}

  async prepareAnalytics(symbolName: string, fromWhen: Date) {
    const historicEntries = await this.market.getEntries(symbolName, fromWhen);
    return {
      symbolName,
      entries: historicEntries.map((entry) => ({
        dailyChange: entry.dailyChangePercent,
        price: entry.lastPrice,
      })),
    };
  }
}
