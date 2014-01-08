var maybe = require('maybe-args');

module.exports = maybe(compose);

function compose(){
	var args = Array.prototype.slice.call(arguments);
	
	if(args.length === 1) return args[0];
	if(args.length === 2) return _compose(args[0], args[1]);

	return _compose(args.shift(), compose.apply(this, args));
}

function _compose(fn2, fn1){
	return function(arg){
    return fn2(fn1(arg));
  };
}