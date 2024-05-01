import { Enumerable } from "../Enumerable";

export function toMap<T, TKey extends string | number | symbol>(
  this: Enumerable<T>,
  keySelector: (element: T) => TKey
): Map<TKey, T> {
  return new Map(this.map(x => [keySelector(x), x]));
}
