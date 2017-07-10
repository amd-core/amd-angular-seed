import 'zone.js/dist/zone-node';
import * as path from 'path';

import { enableProdMode } from '@angular/core';
enableProdMode();

import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';

import { AppServerModuleNgFactory } from '../../aot/src/server/app.server.ngfactory';
import { RenderingEngine } from './rendering-engine';

const Application: express.Application = express();

const BuildRoot: string = path.join('build');
const AppBuildRoot: string = path.join(BuildRoot, 'public');

Application.engine('html', RenderingEngine({
  bootstrap: [AppServerModuleNgFactory]
}));

Application.set('views', AppBuildRoot);

Application.use(morgan('combined'));
Application.use(cors());
Application.use(helmet());

Application.get('/public/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  let fileName: string = req.originalUrl;
  let root: string = fileName.startsWith('/node_modules/') ? '.' : BuildRoot;

  console.log('file request', fileName);

  res.sendFile(fileName, { root }, (err: Error) => {
    if (err) { return next(err); }
  });
});

Application.get('*', (req: express.Request, res: express.Response) => {
  res.render('index.html', { req });
});

import * as Sql from 'mssql/msnodesqlv8';

const config: Sql.config = {
  user: 'nathan.mcgrath',
  password: '@AnimaMundi91',
  server: 'DUB-US-D-MIS01', // You can use 'localhost\\instance' to connect to named instance
  database: 'RAD06',
  options: {
    trustedConnection: true
  }
};

Sql.connect(config)
  .then((pool: any) => {
    console.log('Connected to the database');

    Application.listen(3200, () => {
      console.log('Application listening');
    });
  }).catch((err: Error) => {
    console.error('SQL error', err);
  });

Sql.on('error', (err: Error) => {
  console.error('SQL error event', err);
});
