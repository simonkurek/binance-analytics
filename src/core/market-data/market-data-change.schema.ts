import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type SymbolHistoricEntryDocument = HydratedDocument<SymbolHistoricEntry>;

@Schema()
export class SymbolHistoricEntry {
  @Prop()
  symbol: string;

  @Prop()
  lastPrice: number;

  @Prop()
  dailyChangePercent: number;

  @Prop({ default: now(), required: false })
  date: Date;
}

export const SymbolHistoricEntrySchema =
  SchemaFactory.createForClass(SymbolHistoricEntry);
