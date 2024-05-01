import { Enumerable } from "../Enumerable";

export function count<T>(this: Enumerable<T>) {
  let i = 0;

  for (const element of this) i++;

  return i;
}
