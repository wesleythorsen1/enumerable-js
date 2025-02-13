import { Enumerable } from '../Enumerable';

export function toArray<T>(this: Enumerable<T>): T[] {
  return [...this];
}
