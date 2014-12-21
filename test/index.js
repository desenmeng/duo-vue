/**
 * duo-vue - test/index.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';

var assert = require("assert");
var Duo = require("duo");
var vue = require("../");
var path = require("path");
var read = require("fs").readFileSync;

var fixture = path.join.bind(path, __dirname, "fixtures");

describe("duo-vue", function () {
  it("should be a function", function () {
    assert.equal(typeof vue, "function");
  });

  it("should return a function", function () {
    assert.equal(typeof vue(), "function");
  });

  it("should render vue into js", function (done) {
    var root = fixture();

    var duo = new Duo(root)
      .entry("basic.vue")
      .use(vue());

    duo.run(function (err, file) {
      if (err) return done(err);
      assert.equal(file, read(fixture("basic.js"), "utf8"));
      done();
    });
  });
});
