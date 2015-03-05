duo-vue
=======

Vue plugin for Duo

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Install

```sh
$ npm install --save duo-vue
```

## Usage

### CLI

```sh
$ duo --use duo-vue
```

### API

```js
var Duo = require('duo');
var vue = require('duo-vue');

var duo = Duo(__dirname)
    .entry('index.vue')
    .use(vue());

duo.run(function (err, file) {
    if (err) throw err;

    // file => generated js source code
});
```


[npm-image]: https://img.shields.io/npm/v/duo-vue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/duo-vue
[travis-image]: https://img.shields.io/travis/demohi/duo-vue/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/demohi/duo-vue


