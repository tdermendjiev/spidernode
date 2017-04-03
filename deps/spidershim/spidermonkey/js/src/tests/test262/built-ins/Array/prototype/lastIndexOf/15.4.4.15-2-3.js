// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-3
description: >
    Array.prototype.lastIndexOf - 'length' is own data property that
    overrides an inherited data property on an Array-like object
---*/

        var proto = {length: 0};

        var Con = function () {};
        Con.prototype = proto;

        var child = new Con();
        child.length = 2;
        child[1] = child;

assert.sameValue(Array.prototype.lastIndexOf.call(child, child), 1, 'Array.prototype.lastIndexOf.call(child, child)');

reportCompare(0, 0);
