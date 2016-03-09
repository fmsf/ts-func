"use strict";
require("chai").should();

describe("Pure functions, without side effects", () => {

  let PF = require("../../app/src/slides/a-pure-functions.js");

  it("should sum two numbers", () => {
    PF.sum(1,2).should.equal(3);
    PF.sum(7,3).should.equal(10);
    PF.sum(13,29).should.equal(42);
  });

  it("should return the character at head of the list", () => {
    PF.car([1, 2, 3]).should.equal(1);
    PF.car(["foo", 2, undefined]).should.equal("foo");
  });

  it("should return true only when the value is falsy", () => {
    PF.isFalsy("").should.equal(true);
    PF.isFalsy(false).should.equal(true);
    PF.isFalsy(1).should.equal(false);
  });
});
