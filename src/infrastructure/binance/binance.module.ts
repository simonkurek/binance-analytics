import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { BinanceServiceMock } from './binance.service.mock';

@Module({
  providers: [
    BinanceService,
    {
      provide: BinanceService,

      useClass:
        process.env.NODE_ENV === 'development'
          ? BinanceServiceMock
          : BinanceService,
    },
  ],
  exports: [BinanceService],
})
export class BinanceModule {}
