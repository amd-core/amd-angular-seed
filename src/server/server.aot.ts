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

const BuildRoot = path.join('build');
const AppBuildRoot = path.join(BuildRoot, 'public');

Server.engine('html', RenderingEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

Server.set('views', AppBuildRoot);

Server.use(morgan('combined'));
Server.use(cors());
Server.use(helmet());

Server.get('/public/*', (req, res, next) => {
    let fileName: string = req.originalUrl;
    let root = fileName.startsWith('/node_modules/') ? '.' : BuildRoot;

    console.log('file request', fileName);

    res.sendFile(fileName, { root }, (err) => {
        if (err) { return next(err); }
    });
});

Server.get('*', (req, res) => {
    res.render('index.html', { req });
});

Server.listen(3200, () => {
    console.log('listening on port 3200...');
});
