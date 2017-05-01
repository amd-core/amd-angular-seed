const path = require('path');

const ProjectRoot = path.resolve(__dirname, '..');
const BuildRoot = path.join(ProjectRoot, 'build');
const AppBuildRoot = path.join(ProjectRoot, 'build', 'app');
const SourceRoot = path.join(ProjectRoot, 'src');
const AppRoot = path.join(SourceRoot, 'app');

module.exports = { ProjectRoot, BuildRoot, AppBuildRoot, SourceRoot, AppRoot };
