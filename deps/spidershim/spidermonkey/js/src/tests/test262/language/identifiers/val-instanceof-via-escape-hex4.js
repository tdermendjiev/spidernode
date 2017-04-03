// |reftest| error:SyntaxError
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-6
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: instanceof (instanceof)
negative:
  phase: early
  type: SyntaxError
---*/

var insta\u006eceof = 123;
