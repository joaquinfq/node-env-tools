# node-env-tools [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm install node-env-tools](https://nodei.co/npm/node-env-tools.png?compact=true)](https://npmjs.org/package/node-env-tools/)

Tools for working with `process.env`.

## Examples

```js
const net = require('node-env-tools');

// Use value instead of process.env. 
console.log(net.load({ ... }));

// Get key if exists, nested objects is allowed. 
console.log(net.get('a.b.c'));

// Check if key exists, nested objects is allowed.
console.log(net.has('a.b.c'));

// Set value.
console.log(net.set('NODE_ENV', 'testing'));

// Check if NODE_ENV is 'production' or '"production"'
console.log(net.isEnv('production'));

// Check if NODE_ENV is 'production'
console.log(net.isEnv('production', false));

// Check if NODE_ENV is 'dev', '"dev"', 'development' or '"development"'
console.log(net.isDev());

// Check if NODE_ENV is 'pro', '"pro"', 'production' or '"production"'
console.log(net.isPro());

// Check if NODE_ENV is 'test', '"test"', 'testing' or '"testing"'
console.log(net.isTest());
```
