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

const Server: express.Express = express();

const BuildRoot: string = path.join('build');
const AppBuildRoot: string = path.join(BuildRoot, 'public');

Server.engine('html', RenderingEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

Server.set('views', AppBuildRoot);

Server.use(morgan('combined'));
Server.use(cors());
Server.use(helmet());

Server.get('/public/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let fileName: string = req.originalUrl;
    let root: string = fileName.startsWith('/node_modules/') ? '.' : BuildRoot;

    console.log('file request', fileName);

    res.sendFile(fileName, { root }, (err: Error) => {
        if (err) { return next(err); }
    });
});

Server.get('*', (req: express.Request, res: express.Response) => {
    res.render('index.html', { req });
});

Server.listen(3200, () => {
    console.log('listening on port 3200...');
});
