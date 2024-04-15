import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModuleOptions } from './config/config.options';

@Module({
  imports: [ConfigModuleOptions, CommonModule],
})
export class AppModule {}
