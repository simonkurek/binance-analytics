import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app-config.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [AppConfigModule, ScheduleModule.forRoot()],
})
export class CommonModule {}
