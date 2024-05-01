import { Enumerable } from "../Enumerable";

export function range(start: number, end: number) {
  function* generator() {
    for (let i = start; i < end; i++) {
      yield i;
    }
  }

  return Enumerable.from(generator);
}
