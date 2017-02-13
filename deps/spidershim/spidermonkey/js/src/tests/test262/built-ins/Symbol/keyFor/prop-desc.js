// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.keyfor
es6id: 19.4.2.5
description: Property descriptor
info: >
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Symbol.keyFor, 'function');

verifyNotEnumerable(Symbol, 'keyFor');
verifyWritable(Symbol, 'keyFor');
verifyConfigurable(Symbol, 'keyFor');

reportCompare(0, 0);
