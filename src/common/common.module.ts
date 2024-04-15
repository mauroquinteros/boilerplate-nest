import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { OrmModuleOptions } from './orm/orm.options';
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [OrmModuleOptions, ValidationModule, HealthModule],
})
export class CommonModule {}
