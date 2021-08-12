import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

const color: { [name: string]: string } = {
  none: '\x1b[0m',
  crimson_red: '\x1b[38;2;153;0;0m',
  orange: '\x1b[38;2;255;165;0m',
  dodger_blue: '\x1b[38;2;30;144;255m',
  light_gray: '\x1b[38;2;119;136;153m',
  lime_green: '\x1b[38;2;50;205;50m',
};

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  /**
   * Logs message to STDOUT. Before it logs the message
   * it replaces its content appropriately with the
   * substitution map.
   *
   * @param message log message
   * @param type log level
   * @param col ansi color code
   * @param substitution substitution object / mapping
   */
  log(message: string, type?: string, col?: string, substitution?: any) {
    if (!type) type = 'DEBUG';
    if (!col) col = color['light_gray'];
    message = `${this.time()}\t${color['lime_green']}@${
      this.context || ''
    }\t${col}[${type}] ${message}${color['none']}`;
    while (substitution && /{\w+}/.test(message)) {
      let name = /{(\w+)}/.exec(message)![1];
      if (typeof substitution === 'object' && substitution[name]) {
        message = message.replaceAll(`{${name}}`, substitution[name]);
      } else {
        message = message.replaceAll(`{${name}}`, '[?]');
      }
    }
    console.log(message);
  }

  time() {
    const time = new Date();
    const data = {
      year: time.getFullYear().toString(),
      month: (time.getMonth() + 1).toString().padStart(2, '0'),
      date: time.getDate().toString().padStart(2, '0'),
      hour: time.getHours().toString().padStart(2, '0'),
      minute: time.getMinutes().toString().padStart(2, '0'),
      second: time.getSeconds().toString().padStart(2, '0'),
      millis: time.getMilliseconds().toString().padStart(3, '0'),
    };
    return (
      `${data.year}-${data.month}-${data.date}` +
      ', ' +
      `${data.hour}:${data.minute}:${data.second}.${data.millis}`
    );
  }

  error(message: string, substitution?: any) {
    this.log(message, 'ERROR', color['crimson_red'], substitution);
  }

  warn(message: string, substitution?: any) {
    this.log(message, 'WARN ', color['orange'], substitution);
  }

  info(message: string, substitution?: any) {
    this.log(message, 'INFO ', color['dodger_blue'], substitution);
  }

  debug(message: string, substitution?: any) {
    this.log(message, 'DEBUG ', color['light_gray'], substitution);
  }
}
