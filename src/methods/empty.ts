import { Enumerable } from "../Enumerable";

export function empty<TValue>() {
  return Enumerable.from(new Array<TValue>());
}
