// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-93gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.call(someObject))
flags: [noStrict]
---*/

var o = {};
function f() { return this===o;};
if (! ((function () {"use strict"; return f.call(o); })())){
    throw "'this' had incorrect value!";
}

reportCompare(0, 0);
