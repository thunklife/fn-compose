fn-compose
=============

A simple function to compose an arbitrary number of functions from right to left,
or left to right.

install
=======

```
npm install --save fn-compose
```

usage
=====

```js
var compose = require('fn-compose'),
	mul2 = function mul2(a){ return a * 2 },
	sub1 = function sub1(a){ return a - 1 },
	mul2Sub1 = compose(sub1, mul2);

mul2Sub1(5); //=> 9
```

There is also a left to right mode, which is exported as `ltr`:

```js
var compose = require('fn-compose').ltr, // Notice the .ltr
	mul2 = function mul2(a){ return a * 2 },
	sub1 = function sub1(a){ return a - 1 },
	mul2Sub1 = compose(sub1, mul2);

mul2Sub1(5); //=> 8
```

license
=======

MIT
