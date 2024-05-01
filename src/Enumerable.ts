import * as methods from "./methods";

export class Enumerable<T> {
  private _generatorFunc: (...args: any[]) => Generator<T>;
  private _args: any[];

  protected constructor(generatorFunc: (...args: any[]) => Generator<T>, ...args: any[]) {
    this._generatorFunc = generatorFunc;
    this._args = args;
  }

  [Symbol.iterator]() {
    return this._generatorFunc(...this._args);
  }

  // factory method
  public static from<T>(
    value:
      | { [Symbol.iterator]: () => IterableIterator<T> }
      | ((...args: [] | [any]) => Generator<T>),
    ...args: [] | [any]
  ) {
    if (typeof value === "function") {
      const generatorFunc = value as (...args: [] | [any]) => Generator<T>;
      return new Enumerable(generatorFunc, ...args);
    } else {
      const iterable = value as { [Symbol.iterator]: () => IterableIterator<T> };

      function* generator() {
        for (const element of iterable) {
          yield element;
        }
      }

      return new Enumerable(generator);
    }
  }

  public static range = methods.range;
  public static repeat = methods.repeat;
  public static empty = methods.empty;

  public all = methods.all;
  public any = methods.any;
  public append = methods.append;
  public batch = methods.batch;
  public concat = methods.concat;
  public count = methods.count;
  public distinct = methods.distinct;
  public distinctBy = methods.distinctBy;
  public filter = methods.filter;
  public first = methods.first;
  public firstBy = methods.firstBy;
  public firstOrDefault = methods.firstOrDefault;
  public firstOrDefaultBy = methods.firstOrDefaultBy;
  public groupBy = methods.groupBy;
  public intersect = methods.intersect;
  public intersectBy = methods.intersectBy;
  public map = methods.map;
  public max = methods.max;
  public maxBy = methods.maxBy;
  public min = methods.min;
  public minBy = methods.minBy;
  public skip = methods.skip;
  public take = methods.take;
  public toArray = methods.toArray;
  public toLookup = methods.toLookup;
  public toMap = methods.toMap;
  public toSet = methods.toSet;
  public union = methods.union;
  public unionBy = methods.unionBy;

  /**
   * Alias for `.map()`
   */
  public select = methods.map;

  /**
   * Alias for `.filter()`
   */
  public where = methods.filter;
}
