var HigherOrderFunctions = (function () {
    function HigherOrderFunctions() {
    }
    // In javascript (and typescript) functions can be passed around.
    // this is called being a first class function. We pass sum as a variable bellow.
    HigherOrderFunctions.sum = function (a, b) {
        return a + b;
    };
    // higher order function with types.
    // this allow us to have an explicit contract of what to expect
    HigherOrderFunctions.twice = function (fn) {
        return function (n) { return fn(n, n); };
    };
    // Use higher order functions wisely and they can be powerful
    HigherOrderFunctions.double = function (n) {
        return H.twice(H.sum)(n);
    };
    // Abuse it and it will cause nightmares in people
    HigherOrderFunctions.triple = function (n) {
        return H.sum(H.twice(H.sum)(n), n);
    };
    return HigherOrderFunctions;
})();
var H = HigherOrderFunctions;
module.exports = HigherOrderFunctions;
//# sourceMappingURL=b-higher-order.js.map