var L = require("./d-lists.js");
var C = require("./c-currying.js");
var Transformers = (function () {
    function Transformers() {
    }
    // add key value pair to object
    Transformers.setIn = function (obj) {
        return function (pair) {
            obj[pair[0]] = pair[1];
            return obj;
        };
    };
    Transformers.fromPairs = function (pairs) {
        var obj = {};
        L.forEach(pairs)(T.setIn(obj));
        return obj;
    };
    return Transformers;
})();
var T = Transformers;
module.exports = Transformers;
//# sourceMappingURL=e-transformers.js.map