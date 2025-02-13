import { Enumerable } from '../Enumerable';

export function where<T>(this: Enumerable<T>, predicate: (element: T) => boolean) {
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
