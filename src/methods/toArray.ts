import { Enumerable } from "../Enumerable";

export function toArray<T>(this: Enumerable<T>): Array<T> {
  return [...this];
}
