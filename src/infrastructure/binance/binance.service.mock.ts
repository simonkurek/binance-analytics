import { Injectable } from '@nestjs/common';
import { DailyStatsResult } from 'binance-api-node';

@Injectable()
export class BinanceServiceMock {
  async getDailyStats(symbol: string): Promise<DailyStatsResult> {
    const response: DailyStatsResult = {
      symbol,
      priceChange: '1',
      priceChangePercent: '1',
      weightedAvgPrice: '1',
      prevClosePrice: '1',
      lastPrice: '1',
      lastQty: '1',
      bidPrice: '1',
      bidQty: '1',
      askPrice: '1',
      askQty: '1',
      openPrice: '1',
      highPrice: '1',
      lowPrice: '1',
      volume: '1',
      quoteVolume: '1',
      openTime: 0,
      closeTime: 0,
      firstId: 0,
      lastId: 0,
      count: 0,
    };
    return new Promise((resolve) => {
      resolve(response);
    });
  }
}
