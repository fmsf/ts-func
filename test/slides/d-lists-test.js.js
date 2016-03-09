"use strict";
require("chai").should();

describe("list operations", () => {

  let L = require("../../app/src/slides/d-lists.js");

  it("should return a list with the fn applied to all elements", () => {
    L.map([1,2,3])((v) => v + 1).should.deep.equal([2,3,4]);
  });

  it("should remove undefined from the list", () => {
    L.clean([1,undefined,3]).should.deep.equal([1,3]);
    L.clean([undefined,1,undefined,1,undefined]).should.deep.equal([1,1]);
    L.clean([undefined,undefined,undefined]).should.deep.equal([]);
  });

  it("should remove elements where fn evaluates to true", () => {
    L.reject([1,2,3,4])((v) => v % 2 != 0).should.deep.equal([2,4]);
    L.reject([1,1,2,3,1,1,1])((v) => v == 1).should.deep.equal([2,3]);
  });
});
