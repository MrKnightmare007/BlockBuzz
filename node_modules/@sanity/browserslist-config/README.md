# @sanity/browserslist-config

[![npm stat](https://img.shields.io/npm/dm/@sanity/browserslist-config.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@sanity/browserslist-config)
[![npm version](https://img.shields.io/npm/v/@sanity/browserslist-config.svg?style=flat-square)](https://www.npmjs.com/package/@sanity/browserslist-config)

```sh
npm install --save-dev @sanity/browserslist-config
```

This package is used together with [`@sanity/pkg-utils`], and any other packages that supports [`browserslist`]. Add the `browserslist` key to your `package.json`.

```diff
   "author": "Sanity.io <hello@sanity.io>",
+  "browserslist": "extends @sanity/browserslist-config",
   "files": {
```

[`@sanity/pkg-utils`]: https://github.com/sanity-io/pkg-utils#readme
[`browserslist`]: https://github.com/browserslist/browserslist#shareable-configs
