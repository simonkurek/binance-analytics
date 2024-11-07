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

  async create(symbolEntry: Omit<SymbolHistoricEntry, 'date'>) {
    const entry = new this.symbolHistoricEntryModel(symbolEntry);
    return await entry.save();
  }

  async getHistoricData(symbolName: string, fromDate: Date) {
    return await this.symbolHistoricEntryModel.find({
      symbol: symbolName,
      date: {
        $gte: new Date(new Date(fromDate).setHours(0, 0, 0)),
        $lte: new Date(),
      },
    });
  }
}
