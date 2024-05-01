import { Enumerable } from "../Enumerable";

export function repeat<TValue>(value: TValue, count: number) {
  function* generator() {
    for (let i = 0; i < count; i++) {
      yield value;
    }
  }

  return Enumerable.from(generator);
}
