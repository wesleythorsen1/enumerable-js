import { Enumerable } from '../Enumerable';

export function min<T>(this: Enumerable<T>) {
  return this.minBy(x => x);
}
