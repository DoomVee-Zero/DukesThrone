import { Injectable } from '@nestjs/common';
import { LoggerService } from './services/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: LoggerService) {
    this.logger.setContext(AppService.name);
    this.logger.info('{name} started!', { name: AppService.name });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
