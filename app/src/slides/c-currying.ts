
class Currying {

  // curried sum
  public static sum(a: number): (b: number) => number {
    return (b: number) => a + b;
  }

  // curried bigger than
  public static biggerThan(a: number): (b: number) => number {
    return (b: number) => a < b;
  }


}

module.exports = Currying;
