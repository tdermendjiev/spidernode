// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.5.1_A2.4_T4
description: Checking with undeclarated variables
flags: [noStrict]
---*/

//CHECK#1
if ((y = 1) * y !== 1) {
  $ERROR('#1: (y = 1) * y === 1. Actual: ' + ((y = 1) * y));
}

reportCompare(0, 0);
