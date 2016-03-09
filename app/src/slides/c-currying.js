var Currying = (function () {
    function Currying() {
    }
    // curried sum
    Currying.sum = function (a) {
        return function (b) { return a + b; };
    };
    // curried bigger than
    Currying.biggerThan = function (a) {
        return function (b) { return a < b; };
    };
    return Currying;
})();
module.exports = Currying;
//# sourceMappingURL=c-currying.js.map