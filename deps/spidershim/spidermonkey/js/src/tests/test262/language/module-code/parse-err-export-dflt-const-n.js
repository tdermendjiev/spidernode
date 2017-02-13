// |reftest| skip -- jstests don't yet support module tests
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-exports
es6id: 15.2.3
description: The default export may not be a LexicalDeclaration (const)
flags: [module]
negative:
  phase: early
  type: SyntaxError
---*/

export default const x = null;
