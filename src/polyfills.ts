import 'core-js/es6';
import 'core-js/es7/reflect';
// require('zone.js/dist/zone');
import 'zone.js/dist/zone';

if (!IS_PRODUCTION) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
