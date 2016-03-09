var Lists = (function () {
    function Lists() {
    }
    // a curried forEach to iterate over lists
    Lists.forEach = function (list) {
        return function (fn) {
            for (var i = 0; i < list.length; i++) {
                fn(i, list[i]);
            }
            return list;
        };
    };
    // map is a base transform function, here using the previous for each
    Lists.map = function (list) {
        return function (fn) {
            return Lists.forEach(list)(function (i, e) { return list[i] = fn(e); });
        };
    };
    // transformer: clean purges all undefined values from the list
    Lists.clean = function (list) {
        var newList = [];
        Lists.forEach(list)(function (i, e) { return e != undefined ? newList.push(e) : 0; });
        return newList;
    };
    // transformer: removes all elements where fn returns true using clean and map
    Lists.reject = function (list) {
        return function (fn) {
            return Lists.clean(Lists.map(list)(function (v) { return fn(v) ? undefined : v; }));
        };
    };
    return Lists;
})();
module.exports = Lists;
//# sourceMappingURL=d-lists.js.map