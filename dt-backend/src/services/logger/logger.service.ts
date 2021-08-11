import { Injectable } from '@nestjs/common';
import { LoggerService as NestLogger } from '@nestjs/common';

const color: { [name: string]: string } = {
  'none': '\x1b[0m',
  'crimson_red': '\x1b[38;2;153;0;0m',
  'orange': '\x1b[38;2;255;165;0m',
  'dodger_blue': '\x1b[38;2;30;144;255m',
  'light_gray': '\x1b[38;2;119;136;153m'
};

@Injectable()
export class LoggerService implements NestLogger {
  /**
   * Logs message to STDOUT. Before it logs the message
   * it replaces its content appropriately with the 
   * substitution map.
   *
   * @param message log message
   * @param substitution substitution object / mapping
   */
  log(message: string, substitution: any) {
    while(substitution && /{\w+}/.test(message)) {
      let name = /{(\w+)}/.exec(message)![1];
      if(typeof substitution === 'object' && substitution[name]) {
        message = message.replaceAll(`{${name}}`, substitution[name]);
      } else {
        message = message.replaceAll(`{${name}}`, '[?]')
      }
    }
    console.log(message);
  }

  error(message: string, substitution: any) {
    this.log(`${color['crimson_red']}${message}${color['none']}`, substitution);
  }

  warn(message: string, substitution: any) {
    this.log(`${color['orange']}${message}${color['none']}`, substitution);
  }

  info(message: string, substitution: any) {
    this.log(`${color['dodger_blue']}${message}${color['none']}`, substitution);
  }

  debug(message: string, substitution: any) {
    this.log(`${color['light_gray']}${message}${color['none']}`, substitution);
  }

  verbose(message: string, substitution: any) {
    this.debug(message, substitution);
  }
}
