import './common';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app';

if (IS_PRODUCTION) { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(AppModule);
