# webpack 5.0.0-rc.0 bug

To reproduce run `npm install` then `npm run start`.

```
/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:357
	doResolve(hook, request, message, resolveContext, callback) {
	         ^

RangeError: Maximum call stack size exceeded
    at Resolver.doResolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:357:11)
  ```

Downgrading to webpack `5.0.0-beta.29` makes the problem go away.
