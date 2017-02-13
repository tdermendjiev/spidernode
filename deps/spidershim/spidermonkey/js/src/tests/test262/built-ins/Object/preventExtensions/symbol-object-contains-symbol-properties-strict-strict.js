'use strict';
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4
description: >
    Object.preventExtensions(obj) where obj contains symbol properties.
flags: [onlyStrict]
---*/
var symA = Symbol("A");
var symB = Symbol("B");
var symC = Symbol("C");
var obj = {};
obj[symA] = 1;
Object.preventExtensions(obj);
obj[symA] = 2;

assert.throws(TypeError, function() {
  obj[symB] = 1;
});

assert.throws(TypeError, function() {
  Object.defineProperty(obj, symC, { value: 1 });
});

assert.sameValue(obj[symA], 2, "The value of `obj[symA]` is `2`");
assert.sameValue(delete obj[symA], true, "`delete obj[symA]` is `true`");
assert.sameValue(obj[symB], undefined, "The value of `obj[symB]` is `undefined`");
assert.sameValue(obj[symC], undefined, "The value of `obj[symC]` is `undefined`");




reportCompare(0, 0);
