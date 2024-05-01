import { Enumerable } from "../Enumerable";

export function all<T>(this: Enumerable<T>, predicate: (element: T) => boolean): boolean {
  for (const element of this) {
    if (!predicate(element)) return false;
  }

  return true;
}
