import { Enumerable } from "../Enumerable";

export function batch<T>(this: Enumerable<T>, size: number) {
  if (size <= 0) throw new Error("batch size must be larger than 0");

  const inner = this;

  function* generator() {
    let batch = new Array<T>();

    for (const element of inner) {
      batch.push(element);

      if (batch.length === size) {
        yield batch;
        batch = [];
      }
    }

    if (batch.length) {
      yield batch;
    }
  }

  return Enumerable.from(generator);
}
