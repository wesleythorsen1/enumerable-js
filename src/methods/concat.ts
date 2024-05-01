import { Enumerable } from "../Enumerable";

export function concat<T, TInner>(this: Enumerable<T>, enumerable: Enumerable<TInner>) {
  const inner = this;

  function* generator() {
    for (const element of inner) {
      yield element;
    }

    for (const element of enumerable) {
      yield element;
    }
  }

  return Enumerable.from(generator);
}
