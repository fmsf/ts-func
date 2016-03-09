class Lists {

  // a curried forEach to iterate over lists
  public static forEach(list: Array<number>): (fn: Function) => Array<number> {
    return (fn: Function): Array<number> => {
      for (let i = 0; i < list.length; i++) {
        fn(i, list[i]);
      }
      return list;
    }
  }

  // map is a base transform function, here using the previous for each
  public static map(list: Array<number>): (fn: Function) => Array<number> {
    return (fn: Function) => {
      return Lists.forEach(list)((i,e) => list[i] = fn(e));
    }
  }

  // transformer: clean purges all undefined values from the list
  public static clean(list: Array<number>): Array<number> {
    let newList: Array<number> = [];
    Lists.forEach(list)((i,e) => e != undefined ? newList.push(e) : 0);
    return newList;
  }

  // transformer: removes all elements where fn returns true using clean and map
  public static reject(list: Array<number>): (fn: Function) => Array<number> {
    return (fn: Function): Array<number> => {
      return Lists.clean(Lists.map(list)((v) => fn(v) ? undefined : v));
    }
  }
}

module.exports = Lists;

