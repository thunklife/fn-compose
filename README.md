fn-curry
=============

A simple function to compose an arbitrary number of functions from right to left.

install
=======

```
npm install fn-compose
```

usage
=====

```
var compose = require('fn-compose'),
	add2 = function add2(a){ return a + 2 },
	sub1 = function sub1(a){ return a - 1 },
	add2Sub1 = compose(sub1, add2);

add2Sub1(5); //=> 6

```

license
=======

MIT