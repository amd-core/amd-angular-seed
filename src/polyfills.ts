import 'reflect-metadata';
import 'core-js/es6';
import 'zone.js/dist/zone';

if (!IS_PRODUCTION) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
