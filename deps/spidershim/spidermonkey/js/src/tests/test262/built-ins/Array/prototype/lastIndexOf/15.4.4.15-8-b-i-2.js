// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-2
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property on an Array
---*/

assert.sameValue([true, true, true].lastIndexOf(true), 2, '[true, true, true].lastIndexOf(true)');
assert.sameValue([true, true, false].lastIndexOf(true), 1, '[true, true, false].lastIndexOf(true)');
assert.sameValue([true, false, false].lastIndexOf(true), 0, '[true, false, false].lastIndexOf(true)');

reportCompare(0, 0);
