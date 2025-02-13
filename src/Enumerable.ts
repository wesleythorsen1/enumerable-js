import * as methods from "./methods";

// export class Enumerable<T> implements Iterable<T> {
//   [Symbol.iterator](): Iterator<T, any, any> {
//     throw new Error("Method not implemented.");
//   }

//   public static range = methods.range;
//   public static repeat = methods.repeat;
//   public static empty = methods.empty;

//   public all = methods.all;
//   public any = methods.any;
//   public append = methods.append;
//   public batch = methods.batch;
//   public concat = methods.concat;
//   public count = methods.count;
//   public distinct = methods.distinct;
//   public distinctBy = methods.distinctBy;
//   public first = methods.first;
//   public firstBy = methods.firstBy;
//   public firstOrDefault = methods.firstOrDefault;
//   public firstOrDefaultBy = methods.firstOrDefaultBy;
//   public groupBy = methods.groupBy;
//   public intersect = methods.intersect;
//   public intersectBy = methods.intersectBy;
//   public leftJoin = methods.leftJoin;
//   public max = methods.max;
//   public maxBy = methods.maxBy;
//   public min = methods.min;
//   public minBy = methods.minBy;
//   public select = methods.select;
//   public skip = methods.skip;
//   public take = methods.take;
//   public toArray = methods.toArray;
//   public toLookup = methods.toLookup;
//   public toMap = methods.toMap;
//   public toSet = methods.toSet;
//   public union = methods.union;
//   public unionBy = methods.unionBy;
//   public where = methods.where;
// }

// export class Enumerable<T> implements Iterable<T> {
//   // Cache the values on first iteration (assumes a finite sequence).
//   private _cache: T[] | null = null;

//   private constructor(private readonly getIterator: () => Iterator<T>) {}

//   // Factory method accepting any Iterable<T>
//   public static from<T>(source: Iterable<T>): Enumerable<T> {
//     // If source is already an Enumerable, return it directly.
//     if (source instanceof Enumerable) return source;

//     const t1 = source[Symbol.iterator];

//     return new Enumerable(() => source[Symbol.iterator]());
//   }

//   // Implements Iterable<T>
//   [Symbol.iterator](): IterableIterator<T> {
//     // If we've cached the values, return an iterator over the cache.
//     if (this._cache !== null) {
//       return this._cache[Symbol.iterator]();
//     }

//     // Otherwise, run the generator, cache its results, and then return an iterator.
//     this._cache = Array.from(this.getIterator());
//     return this._cache[Symbol.iterator]();
//   }

//   // LINQ-like "where" that filters the elements.
//   public where(predicate: (element: T) => boolean): Enumerable<T> {
//     // "this" is already lazy and cacheable.
//     return new Enumerable(
//       function* () {
//         for (const element of this) {
//           if (predicate(element)) {
//             yield element;
//           }
//         }
//       }.bind(this)
//     );
//   }

//   // Convenience method to collect items into an array.
//   public toArray(): T[] {
//     return Array.from(this);
//   }
// }

export class Enumerable<T> implements Iterable<T> {
  private constructor(protected readonly source: Iterable<T>) {}

  // Factory method accepting an Iterable or a function that returns an Iterable.
  public static from<T>(source: Iterable<T> | (() => Iterable<T>)): Enumerable<T> {
    if (typeof source === "function") {
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

  // LINQ-like "where" method using a generator.
  public where(predicate: (element: T) => boolean): Enumerable<T> {
    const source = this.source;
    return Enumerable.from({
      *[Symbol.iterator]() {
        for (const element of source) {
          if (predicate(element)) {
            yield element;
          }
        }
      },
    });
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
  // public where = methods.where;
}
