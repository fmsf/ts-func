"use strict";
require("chai").should();

describe("higher order functions", () => {
  let H = require("../../app/src/slides/b-higher-order.js");

  it('should sum two numbers', () => {
    H.sum(1,2).should.equal(3);
  });

  it('should double two numbers', () => {
    H.double(3).should.equal(6);
    H.double(7).should.equal(14);
  });

  it('should triple two numbers', () => {
    H.triple(2).should.equal(6);
    H.triple(3).should.equal(9);
    H.triple(4).should.equal(12);
  });

});
