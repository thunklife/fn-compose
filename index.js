var maybe = require('maybe-args');

var slice = Array.prototype.slice;

var compose = maybe(function (){
    var args = slice.call(arguments);

    if(args.length === 1) return args[0];
    if(args.length === 2) return _compose(args[0], args[1]);

    return _compose(args.shift(), compose.apply(this, args));
})

compose.ltr = function() {
  return compose.apply(compose, slice.call(arguments).reverse());
};

function _compose(fn2, fn1){
    return function(arg){
        return fn2(fn1(arg));
    };
}

module.exports = compose;
