# react-proxy-hook

Helps you test a React Hook

[![npm version](https://badge.fury.io/js/react-proxy-hook.svg)](https://badge.fury.io/js/react-proxy-hook)

## Requirement ⚠️

To use `react-proxy-hook`, you must use `react@16.8.0-alpha.0`. React Hooks is currently at
**[RFC](https://github.com/reactjs/rfcs/pull/68)** stage.

## Installation

```bash
$ npm i -D react-proxy-hook
```

## Usage

`react-proxy-hook` is a wrapper around Kent C. Dodd's `react-testing-library`.
It was inspired by the `setup` function that Kent wrote in his
[YouTube video](https://youtu.be/0e6WCQYg5tU).
It is presented here as a simple React Hooks function wrapper.

Hooks can not be tested as standalone functions as they will not work
unless they are called from withing a rendered component.
`react-proxy-hook` gets around this limitation by proxying an actual
component.

> Maybe should have been called a HOH (Higher Order Hook)?

You test your Hook just like you would use it in an actual component.
Just pass your actual hook to `proxyHook` and it will return
a proxied version of your hook.

Look at how easy testing a Hook can be!

```js
import { proxyHook, cleanup } from 'react-proxy-hook';
import useCounter from '../use-counter';

const useCounterProxy = proxyHook(useCounterProxy);

afterEach(cleanup);

test('useCounter', () => {
  const counterData = useCounterProxy();
  counterData.increment();
  expect(counterData.count).toBe(1);
  counterData.decrement();
  expect(counterData.count).toBe(0);
});
```

### Limitations

- Currently, you can only test Hooks that return an object.

- You must not deconstruct the returned object in your test.

## Live demo

You can see `react-proxy-hook` used to test a demo counter app in CodeSandbox.
This is the same app the Kent talked about on his [YouTube video](https://youtu.be/0e6WCQYg5tU),
but the tests were changed to use `react-proxy-hook` instead.

[![Edit demo app on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6lqxvx42mz)

## License

**[MIT](LICENSE)** Licensed

---

Obviously, none of this would not be possible without the tireless work of
Kent C. Dodds. Thank you! 🙏
