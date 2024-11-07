import { Injectable } from '@nestjs/common';
import Binance, { Binance as IBinance } from 'binance-api-node';

@Injectable()
export class BinanceService {
  private readonly client: IBinance;

  constructor() {
    this.client = Binance();
  }

  async getExchangeInfo() {
    await this.client.exchangeInfo();
  }

  async getDailyStats(symbol: string) {
    return await this.client.dailyStats({ symbol });
  }
}
