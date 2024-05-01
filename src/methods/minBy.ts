import { Enumerable } from "../Enumerable";

export function minBy<T, TValue>(this: Enumerable<T>, selector: (element: T) => TValue) {
  let min: T | null = null;
  let minValue: TValue | null = null;

  for (const element of this) {
    const elementValue = selector(element);
    if (minValue === null || minValue === undefined || minValue > elementValue) {
      min = element;
      minValue = elementValue;
    }
  }

  return min;
}
