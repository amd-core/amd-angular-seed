const path = require('path');

const ProjectRoot = path.resolve(__dirname, '..', '..');

const BuildRoot = path.join(ProjectRoot, 'build');
const AppBuildRoot = path.join(BuildRoot, 'public');

const SourceRoot = path.join(ProjectRoot, 'src');
const AppRoot = path.join(SourceRoot, 'app');

const AssetRoot = path.join(SourceRoot, 'assets');
const FontRoot = path.join(AssetRoot, 'fonts');
const ImageRoot = path.join(AssetRoot, 'images');

module.exports = {
  ProjectRoot,
  BuildRoot, AppBuildRoot,
  SourceRoot, AppRoot,
  AssetRoot, FontRoot, ImageRoot
};
