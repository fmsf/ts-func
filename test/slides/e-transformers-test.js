"use strict";
require("chai").should();

describe("transformers", () => {

  let T = require("../../app/src/slides/e-transformers.js");

  it("should transform a list of pairs into a map", () => {
    T.fromPairs([[1,2], ["foo","bar"]]).should.deep.equal({1: 2, "foo": "bar"});
  });

});
