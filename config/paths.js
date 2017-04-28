const path = require('path');

const ProjectRoot = path.resolve(__dirname, '..');
const BuildRoot = path.join(ProjectRoot, 'build');
const SourceRoot = path.join(ProjectRoot, 'src');
const AppRoot = path.join(SourceRoot, 'app');

module.exports = { ProjectRoot, BuildRoot, SourceRoot, AppRoot };
