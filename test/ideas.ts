import { Enumerable } from '../src';

const e1 = Enumerable.empty<number>()
  .append(1)
  .concat(Enumerable.range(10, 13))
  .append(20)
  .concat(Enumerable.repeat(42, 2))
  .append(1)
  .append(-100)
  .append(100)
  .where(n => n > 0)
  .where(n => n < 99)
  .append(200)
  .select(n => n * 2)
  .select((n, i) => n + i);
console.log(e1.toArray());
console.log(e1.toArray());

const e2 = Enumerable.range(1, 25);
console.log(e2.toArray());
console.log(e2.select((n, i) => n + i).toArray());

const e3 = Enumerable.repeat(() => new Date(), 1_000_000)
  .select(func => func())
  .chunk(3)
  .selectMany(b => {
    for (const dt of b) {
      console.log(dt.getTime());
    }
    return b;
  })
  .select(dt => dt.getTime());

console.log(e3.toArray());
console.log(e3.toArray());

const v1 = [1, 2, 3];
const v2 = new Array<number>(1, 2, 3);
const v3 = Enumerable.range(1, 3);
const v4 = new Set<number>([1, 2, 3]);
function* v5() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

Enumerable.from(v1);
Enumerable.from(v2);
Enumerable.from(v3);
Enumerable.from(v4);
Enumerable.from(v5());
