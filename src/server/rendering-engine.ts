import * as fs from 'fs';
import { renderModuleFactory } from '@angular/platform-server';
import { Request } from 'express';

const templateCache = {};
const outputCache = {};

export interface IRenderCallback {
  (err: Error | undefined, html: string): void;
}

export interface IRenderOptions {
  req: Request
}

export const RenderingEngine = (setupOptions: any) => {

  return function (filePath: string, options: IRenderOptions, callback: IRenderCallback) {

    let url: string = options.req.url;
    let html: string = outputCache[url];

    if (html) {
      console.log('from cache: ' + url);
      return callback(undefined, html);
    }

    console.log('building: ' + url);
    if (!templateCache[filePath]) { templateCache[filePath] = fs.readFileSync(filePath).toString(); }

    renderModuleFactory(setupOptions.bootstrap[0], {
      document: templateCache[filePath], url
    }).then((str: string) => {
      outputCache[url] = str;
      return callback(undefined, str);
    });
  }
}
