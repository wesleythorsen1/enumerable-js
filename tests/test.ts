// TODO

import { Enumerable } from "../src";

let e = Enumerable.empty<number>();

e = e.append(1).append(2);

console.log(e.toArray());
