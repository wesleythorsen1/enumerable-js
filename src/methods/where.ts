import { Enumerable } from "../Enumerable";

export function where<T>(this: Enumerable<T>, predicate: (element: T) => boolean) {
  const inner = this;

  function* generator() {
    for (const element of inner) {
      if (predicate(element)) {
        yield element;
      }
    }
  }

  return Enumerable.from(generator);
}
