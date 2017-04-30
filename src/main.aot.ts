import './common';

import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

if (IS_PRODUCTION) { enableProdMode(); }

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
