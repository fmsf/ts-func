var PureFunctions = (function () {
    function PureFunctions() {
    }
    PureFunctions.sum = function (a, b) {
        return a + b;
    };
    PureFunctions.car = function (list) {
        return list[0];
    };
    PureFunctions.isFalsy = function (value) {
        return !value;
    };
    return PureFunctions;
})();
module.exports = PureFunctions;
//# sourceMappingURL=a-pure-functions.js.map