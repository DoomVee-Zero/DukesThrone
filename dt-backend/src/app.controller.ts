import {Controller, Get } from '@nestjs/common';
import { EmpireModule } from "./model/empire/empire.module";
import { AppService } from './app.service';
import {Empire} from "./model/types/empire.type";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getEmpire(): string {
    return this.appService.
  }
}
