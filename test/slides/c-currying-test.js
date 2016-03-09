"use strict";
require("chai").should();

describe("curriying functions", () => {
  let C = require("../../app/src/slides/c-currying.js");

  it("should add all numbers", () => {
    C.sum(1)(2).should.equal(3);
    C.sum(7)(3).should.equal(10);
    C.sum(13)(29).should.equal(42);;
  });

  it("should return true if first is bigger than the seccond", () => {
    C.biggerThan(5)(1).should.equal(true);
    C.biggerThan(1)(1).should.equal(true);
    C.biggerThan(-1)(1).should.equal(false);
  });


  describe("examples", () => {

    it("incrementing the whole list by 5", () => {
      console.log([1,2,3].map(C.sum(5)));
    });

    it("get all elements bigger than 4", () => {
      console.log([1,2,3,4,5,6].filter(C.biggerThan(4)));
    });
  });

});

