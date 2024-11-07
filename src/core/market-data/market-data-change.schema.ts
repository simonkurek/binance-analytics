import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type SymbolHistoricEntryDocument = HydratedDocument<SymbolHistoricEntry>;

@Schema()
export class SymbolHistoricEntry {
  @Prop()
  symbol: string;

  @Prop()
  lastPrice: number;

  @Prop()
  dailyChangePercent: number;

  @Prop()
  date: Date;
}

export const SymbolHistoricEntrySchema =
  SchemaFactory.createForClass(SymbolHistoricEntry);
