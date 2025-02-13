import { Enumerable } from '../Enumerable';

export function select<T, TResult>(this: Enumerable<T>, selector: (element: T) => TResult) {
  const inner = this;

  function* generator() {
    for (const element of inner) {
      yield selector(element);
    }
  }

  return Enumerable.from(generator);
}
