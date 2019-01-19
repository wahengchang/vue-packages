DateTimePicker

## Init Project
this links all modules in a monorepo together. This way, you can immediately test whether a change will break code that relies on a module.
 
```
$ lerna bootstrap
```


## Add
Add a dependency to matched packages

```
$ lerna add module-1 --scope=module-2

// lerna add @lazy-copilot/datetimepicker --scope=demo
```


## Publish
```
$ lerna run build-bundle ; lerna publish
```

publishing to org npm, needed to make it public on the first publish
```
$ npm publish --access=public
```


## Run all test
```
$ lerna run test
```


## Reference
 - [https://phoenixwong.github.io/vue2-timepicker/](https://phoenixwong.github.io/vue2-timepicker/)
 - [unit test tool](https://vue-test-utils.vuejs.org/api/wrapper/)