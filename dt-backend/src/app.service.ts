import { Injectable } from '@nestjs/common';
import { LoggerService } from './services/logger/logger.service';
import { Empire } from "./model/types/empire.type";

@Injectable()
export class AppService {
  constructor(private logger: LoggerService) {
    this.logger.setContext(AppService.name);
    this.logger.info('{name} started!', { name: AppService.name });
  }

  getHello(): string {
    return 'Hello World!';
  }

  getEmpire(): Empire {
    return  this.Empire;
  }
}
