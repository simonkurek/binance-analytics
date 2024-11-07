import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { IsDate, IsString } from 'class-validator';

export class GetAnalyticsParams {
  @IsDate()
  fromDate: string;
  @IsString()
  symbolName: string;
}

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('/')
  async createAnalytics(
    @Query('symbolName') symbolName: string,
    @Query('fromDate') fromDate: string,
  ) {
    return await this.analyticsService.prepareAnalytics(
      symbolName,
      new Date(fromDate),
    );
  }
}
