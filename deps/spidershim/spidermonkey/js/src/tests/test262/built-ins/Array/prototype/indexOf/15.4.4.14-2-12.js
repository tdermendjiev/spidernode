// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-12
description: >
    Array.prototype.indexOf - 'length' is own accessor property
    without a get function that overrides an inherited accessor
    property
---*/

            Object.defineProperty(Object.prototype, "length", {
                get: function () {
                    return 20;
                },
                configurable: true
            });

            var obj = { 1: 1 };
            Object.defineProperty(obj, "length", {
                set: function () { },
                configurable: true
            });

assert.sameValue(Array.prototype.indexOf.call(obj, 1), -1, 'Array.prototype.indexOf.call(obj, 1)');

reportCompare(0, 0);
