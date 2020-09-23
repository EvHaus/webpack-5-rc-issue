# webpack 5.0.0-rc.0 bug

To reproduce run `npm install` then `npm run start`.

```
/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:357
	doResolve(hook, request, message, resolveContext, callback) {
	         ^

RangeError: Maximum call stack size exceeded
    at Resolver.doResolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:357:11)
    at Resolver.resolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:315:16)
    at /Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/index.js:77:12
    at resolveFile (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/webpack/lib/FileSystemInfo.js:1117:6)
    at asyncLib.queue (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/webpack/lib/FileSystemInfo.js:1166:7)
    at Object.runQueue [as process] (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/neo-async/async.js:8099:9)
    at done (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/neo-async/async.js:8083:11)
    at asyncLib.queue (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/webpack/lib/FileSystemInfo.js:1171:8)
    at Object.runQueue [as process] (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/neo-async/async.js:8099:9)
    at done (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/neo-async/async.js:8083:11)
    at resolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/webpack/lib/FileSystemInfo.js:1147:8)
    at finishResolved (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:267:11)
    at doResolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:329:25)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn0 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn0 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at resolver.doResolve (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:88:10)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn0 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn0 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:42:1)
    at resolver.doResolve.allowAlternatives (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/ConditionalPlugin.js:54:9)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn1 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)
    at iterator (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/forEachBail.js:16:12)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn0 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)
    at hook.callAsync (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/lib/Resolver.js:396:24)
    at _fn1 (eval at create (/Users/evhaus/Git/webpack-5-rc-issue/node_modules/enhanced-resolve/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)
  ```
