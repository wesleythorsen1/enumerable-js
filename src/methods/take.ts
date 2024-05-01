import { Enumerable } from "../Enumerable";

export function take<T>(this: Enumerable<T>, count: number) {
  if (count <= 0) throw new Error("take count must be 0 or larger");

  const inner = this;

  function* generator() {
    let current = -1;

    for (const element of inner) {
      current++;

      if (current >= count) return;

      yield element;
    }
  }

  return Enumerable.from(generator);
}
