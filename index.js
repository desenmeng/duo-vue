/**
 * duo-vue - index.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';
/**
 * Module Dependencies
 */

var compiler = require('vue-component-compiler');
var read = require("fs").readFileSync;

/**
 * Expose `plugin`
 */

module.exports = plugin;

/**
 * Compile vue component
 * to js
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function plugin() {
  return function duovue(file, duo, done) {
    if (file.type !== 'vue') return;
    var content = read(file.path, 'utf-8');
    compiler.compile(content, function (err, result) {
      if (err) return done(err);
      file.type = 'js';
      file.src = result;
      done(null, file);
    })
  }
}
