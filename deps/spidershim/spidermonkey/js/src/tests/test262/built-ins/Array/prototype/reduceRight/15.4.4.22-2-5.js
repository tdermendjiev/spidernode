// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-5
description: >
    Array.prototype.reduceRight applied to Array-like object, 'length'
    is an own data property that overrides an inherited accessor
    property
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        var proto = {};
        Object.defineProperty(proto, "length", {
            get: function () {
                return 3;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "length", {
            value: 2,
            configurable: true
        });
        child[0] = 12;
        child[1] = 11;
        child[2] = 9;

assert(Array.prototype.reduceRight.call(child, callbackfn), 'Array.prototype.reduceRight.call(child, callbackfn) !== true');
assert(accessed, 'accessed !== true');

reportCompare(0, 0);
