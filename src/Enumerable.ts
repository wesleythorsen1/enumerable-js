import * as methods from './methods';

export class Enumerable<T> implements Iterable<T> {
  private constructor(protected readonly source: Iterable<T>) {}

  // Factory method accepting an Iterable or a function that returns an Iterable.
  public static from<T>(source: Iterable<T> | (() => Iterable<T>)): Enumerable<T> {
    if (typeof source === 'function') {
      // If a function is provided, call it to get the iterable.
      return new Enumerable(source());
    } else {
      return new Enumerable(source);
    }
  }

  // Allow for iteration over the underlying source.
  [Symbol.iterator](): Iterator<T> {
    return this.source[Symbol.iterator]();
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
  public first = methods.first;
  public firstBy = methods.firstBy;
  public firstOrDefault = methods.firstOrDefault;
  public firstOrDefaultBy = methods.firstOrDefaultBy;
  public groupBy = methods.groupBy;
  public intersect = methods.intersect;
  public intersectBy = methods.intersectBy;
  public leftJoin = methods.leftJoin;
  public max = methods.max;
  public maxBy = methods.maxBy;
  public min = methods.min;
  public minBy = methods.minBy;
  public select = methods.select;
  public skip = methods.skip;
  public take = methods.take;
  public toArray = methods.toArray;
  public toLookup = methods.toLookup;
  public toMap = methods.toMap;
  public toSet = methods.toSet;
  public union = methods.union;
  public unionBy = methods.unionBy;
  public where = methods.where;
}
