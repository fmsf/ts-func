class PureFunctions { // are functions that don't have side effects

  public static sum(a: number, b:number): number{
    return a + b;
  }

  public static car(list: Array<any>): string {
    return list[0];
  }

  public static isFalsy(value: any): boolean {
    return !value;
  }
}

module.exports = PureFunctions;
