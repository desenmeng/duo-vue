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
var fs = require('fs');

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

function plugin(opts) {
  opts = opts || {};
  var type = opts.type || 'vue';
  return function duovue(file, duo, done) {
    if (file.type != type) return;
    var content = fs.readFileSync(file.path, 'utf-8');
    compiler.compile(content, function (err, result) {
      if (err) return;
      file.type = 'js';
      file.src = result;
      done(null, file);
    })
  }
}
