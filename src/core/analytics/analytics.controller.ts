import { Controller, Get, Param } from '@nestjs/common';
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

  @Get()
  async createAnalytics(@Param() params: GetAnalyticsParams) {
    return await this.analyticsService.prepareAnalytics(
      params.symbolName,
      new Date(params.fromDate),
    );
  }
}
