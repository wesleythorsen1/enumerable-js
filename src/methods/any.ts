import { Enumerable } from "../Enumerable";

export function any<T>(this: Enumerable<T>, predicate: (element: T) => boolean) {
  for (const element of this) {
    if (predicate(element)) return true;
  }

  return false;
}
