fn-compose
=============

A simple function to compose an arbitrary number of functions from right to left.

install
=======

```
npm install --save fn-compose
```

usage
=====

```
var compose = require('fn-compose'),
	mul2 = function mul2(a){ return a * 2 },
	sub1 = function sub1(a){ return a - 1 },
	mul2Sub1 = compose(sub1, mul2);

mul2Sub1(5); //=> 9

```

license
=======

MIT
