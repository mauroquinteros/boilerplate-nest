import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';

export class AppLogger implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'silly',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: () => {
                const date = new Date();
                const dayName = date.toLocaleDateString('en-US', {
                  weekday: 'short',
                });
                const time = date.toLocaleTimeString('en-US');
                return `${dayName} @ ${time}`;
              },
            }),
            winston.format.printf((info) => {
              const context = info.context ? `[${info.context}] ` : '';
              const stack = info.stack ? `\n [${info.stack}] ` : '';

              return `${info.timestamp} [${info.level.toUpperCase()}] ${context}${info.message} ${stack}`;
            }),
            winston.format.colorize({ all: true }),
          ),
        }),
      ],
    });
  }

  log(message: any, context?: string) {
    this.logger.info(message, { context });
  }
  error(message: any, context?: string, stack?: string) {
    this.logger.error(message, { context, stack });
  }
  warn(message: any, context?: string) {
    this.logger.warn(message, { context });
  }
  debug(message: any, context?: string) {
    this.logger.debug(message, { context });
  }
  verbose(message: any, context?: string) {
    this.logger.verbose(message, { context });
  }
}
