# enumerable-js

[![NPM Version](https://img.shields.io/npm/v/@wesleythorsen/enumerable-js)](https://npmjs.com/package/@wesleythorsen/enumerable-js) [![NPM Version](https://img.shields.io/npm/dw/@wesleythorsen/enumerable-js)](https://npmjs.com/package/@wesleythorsen/enumerable-js) [![NPM Version](https://img.shields.io/bundlephobia/min/@wesleythorsen/enumerable-js)](https://npmjs.com/package/@wesleythorsen/enumerable-js)

A TypeScript based [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) implementation with deferred execution.

License: [MIT](https://opensource.org/licenses/MIT)

## Installation

    npm install @wesleythorsen/enumerable-js

## Quick Start

Create an Enumerable:

```TypeScript
import { Enumerable } from "@wesleythorsen/enumerable-js"

const cities = [
  { name: "New York", population: 8_335_897, climate: "cold" },
  { name: "Los Angeles", population: 3_822_238, climate: "warm" },
  { name: "Seattle", population: 749_256, climate: "cold" },
  { name: "San Diego", population: 1_381_162, climate: "warm" },
];

let largestWarmCity = Enumerable.from(cities)
  .where(c => c.climate === "warm") // alias for .filter()
  .maxBy(c => c.population);
```

Implemented Methods:

- all
- any
- append
- batch
- concat
- count
- distinct
- distinctBy
- empty
- filter
- first
- firstBy
- firstOrDefault
- firstOrDefaultBy
- groupBy
- intersect
- intersectBy
- map
- max
- maxBy
- min
- minBy
- range
- repeat
- select (alias to map)
- skip
- take
- toArray
- toLookup
- toMap
- toSet
- union
- unionBy
- where (alias to filter)

## Support

If you would like to add unimplemented LINQ methods please create a PR. If you find any bug, please use the [issues tracker](https://github.com/wesleythorsen1/enumerable-js/issues). I'll be happy to help you!
