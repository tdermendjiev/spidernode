// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-1
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property on an Array-like object
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        var obj = { 0: 0, 1: 1, 2: 2, length: 2 };
        Array.prototype.reduce.call(obj, callbackfn);

assert(testResult, 'testResult !== true');

reportCompare(0, 0);
