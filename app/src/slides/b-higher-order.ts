class HigherOrderFunctions {
  // In javascript (and typescript) functions can be passed around.
  // this is called being a first class function. We pass sum as a variable bellow.
  public static sum(a: number, b:number): number {
    return a + b;
  }

  // higher order function with types.
  // this allow us to have an explicit contract of what to expect
  public static twice(fn: (a: number, b: number) => number): (n: number) => number {
    return (n: number) => fn(n,n);
  }

  // Use higher order functions wisely and they can be powerful
  public static double(n: number): number {
    return H.twice(H.sum)(n);
  }

  // Abuse it and it will cause nightmares in people
  public static triple(n: number): number {
    return H.sum(H.twice(H.sum)(n),n);
  }
}

let H = HigherOrderFunctions;
module.exports = HigherOrderFunctions;
