// |reftest| skip-if(!this.hasOwnProperty('Intl')) -- needs Intl
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 9.2.1_2
description: >
    Tests that the behavior of a List is not affected by adversarial
    changes to Array.prototype.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintArray();

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    var canonicalized = Constructor.supportedLocalesOf([defaultLocale, defaultLocale]);
    if (canonicalized.length > 1) {
        $ERROR("Canonicalization didn't remove duplicate language tags from locale list.");
    }
});

reportCompare(0, 0);
