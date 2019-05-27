# each-period [![Build status](https://travis-ci.org/gabriesr/each-period.svg?branch=master)](https://travis-ci.org/gabriesr/each-period) [![npm version](https://img.shields.io/npm/v/each-period.svg)](https://npmjs.org/package/each-period) [![codecov](https://codecov.io/gh/gabriesr/each-period/branch/master/graph/badge.svg)](https://codecov.io/gh/gabriesr/each-period)

> Brief and fresh sentence fragment

## Install

```shell
npm install each-period
```

## Use

```typescript
import { each } from 'each-period'
// TODO: describe usage

each('month').thisYear().formatAs('MMM/YY')
each('month').nextYear().formatAs('MMM/YY')
each(3, 'months').thisYear().formatAs('MMM/YY', 'MMM/YY', {prefix: 'TRI'})

```

## Related

TODO

## Acknowledgments

TODO
