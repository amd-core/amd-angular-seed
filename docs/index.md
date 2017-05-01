# Feature List

## General Web Features

- [x] TypeScript
  - [x] Transpilation
  - [ ] Linting
- [x] JavaScript
  - [x] Optimisation
  - [ ] Linting (in-editor only)
- [x] SASS compilation
- [ ] CSS optimisation
  - [ ] Minification
  - [x] Post processing
    - [x] Autoprefixer for cross browser support
- [ ] Image Optimisation
  - [ ] Compression
  - [ ] Sprite sheet generation
- [ ] Favicon generation
- [ ] Independent environment and build configuration
- [ ] Progressive web app capability
  - [ ] Offline support: service worker / appcache configuration generation
  - [ ] Web app manifest generation
  - [ ] Device icon generation

## Angular Specific Features

- [x] JIT compilation
- [x] AOT compilation
- [ ] Unit testing configuration
- [x] Server side rendering
- [ ] Dynamic environment configuration loading
- [ ] Code generation
  - [ ] Module
    - [ ] Main
    - [ ] Test
  - [ ] Component
    - [ ] Main
    - [ ] Test
    - [ ] Add to new module
    - [ ] Add to existing module
  - [ ] Service
    - [ ] Main
    - [ ] Test
    - [ ] Add to new module
    - [ ] Add to existing module
  - [ ] Directive
    - [ ] Main
    - [ ] Test
    - [ ] Add to new module
    - [ ] Add to existing module
  - [ ] Filter
    - [ ] Main
    - [ ] Test
    - [ ] Add to new module
    - [ ] Add to existing module

# Todo

- [ ] Dynamic CSS build based configuration, specifically for minification
- [ ] Load images through a loader instead of require.context
- [ ] Make a common TypeScript config and reuse between all configs

# Documentation

- [Styles](styles.md)
