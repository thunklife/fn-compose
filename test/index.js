var test = require('tap').test,
	compose = require('../');

test('should allow single function', function(t){
	t.plan(1);
	var someFunc = function someFunc(){ return 'foo'},
		result = compose(someFunc);

	t.equals(result(), 'foo');
});

test('should compose two functions', function(t){
	t.plan(1);
	var add = function add2(a){ return a + 2 },
		sub = function sub1(a){ return a - 1 },
		composed = compose(sub, add),
		result = composed(5);
	
	t.equals(result, 6);
});

test('should compose more than two functions', function(t){
	t.plan(1);
	var add = function add2(a){ return a + 2 },
		sub = function sub1(a){ return a - 1 },
		composed = compose(add, sub, add),
		result = composed(5);

	t.equals(result, 8);
})


