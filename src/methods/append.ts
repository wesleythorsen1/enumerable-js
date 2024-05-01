import { Enumerable } from "../Enumerable";

export function append<T>(this: Enumerable<T>, value: T) {
  const inner = this;

  function* generator() {
    for (const element of inner) {
      yield element;
    }

    yield value;
  }

  return Enumerable.from(generator);
}
