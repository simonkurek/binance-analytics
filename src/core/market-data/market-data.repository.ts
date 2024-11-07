import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SymbolHistoricEntry } from './market-data-change.schema';
import { Model } from 'mongoose';

@Injectable()
export class MarketDataRepository {
  constructor(
    @InjectModel(SymbolHistoricEntry.name)
    private symbolHistoricEntryModel: Model<SymbolHistoricEntry>,
  ) {}

  async create(symbolEntry: SymbolHistoricEntry) {
    const entry = new this.symbolHistoricEntryModel(symbolEntry);
    return await entry.save();
  }

  async getHistoricData(symbolName: string, days: number) {
    return await this.symbolHistoricEntryModel.findOne({
      symbol: symbolName,
      $where: {},
    });
  }
}
