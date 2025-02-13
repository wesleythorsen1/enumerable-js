// TODO

import { Enumerable } from "../src";

let e = Enumerable.empty<number>();

e = e
  .append(2)
  .append(3)
  .append(1)
  .append(-100)
  .append(100)
  .where(n => n > 0)
  .where(n => n < 10)
  .append(200);

for (const a of e) {
  console.log(a);
}

console.log(e.toArray());
console.log(e.toArray());
console.log(e.toArray());

// type IEnumerable<T> = Iterable<T, T, T>;

// function test2<T>(it: Iterable<T, T, T>) {}
// function test3<T>(it: Iterable<T>) {}
// function test4<T>(it: IEnumerable<T>) {}

// const v1 = [1, 2, 3];
// const v2 = new Array<number>(1, 2, 3);
// const v3 = Enumerable.range(1, 3);
// const v4 = new Set<number>([1, 2, 3]);

// test2(v1);
// test2(v2);
// test2(v3);
// test2(v4);

// test3(v1);
// test3(v2);
// test3(v3);
// test3(v4);

// test4(v1);
// test4(v2);
// test4(v3);
// test4(v4);
