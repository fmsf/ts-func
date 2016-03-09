let L = require("./d-lists.js");
let C = require("./c-currying.js");

class Transformers {

  // add key value pair to object
  public static setIn(obj: {key: any; value: any}): (pair: Array<any>) => {key: any; value: any} {
    return (pair: Array<any>) => {
      obj[pair[0]] = pair[1];
      return obj;
    }
  }

  public static fromPairs(pairs: Array<Array<number|string>>): {k: number|string; v: number|string} {
    let obj = {};
    L.forEach(pairs)(T.setIn(obj));
    return obj;
  }

}

let T = Transformers;
module.exports = Transformers;
