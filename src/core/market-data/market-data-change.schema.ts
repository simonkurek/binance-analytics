import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SymbolHistoricEntryDocument = HydratedDocument<SymbolHistoricEntry>;

@Schema({ timestamps: true })
export class SymbolHistoricEntry {
  @Prop()
  symbol: string;

  @Prop()
  lastPrice: number;

  @Prop()
  dailyChangePercent: number;
}

export const SymbolHistoricEntrySchema =
  SchemaFactory.createForClass(SymbolHistoricEntry);
