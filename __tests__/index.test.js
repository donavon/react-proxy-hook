import 'jest-dom/extend-expect';

import { proxyHook, cleanup } from '../src';

const useFoo = val => val;

const useFooProxy = proxyHook(useFoo);

afterEach(cleanup);

describe('proxyHook', () => {
  test('import { proxyHook } from "react-proxy-hook"', () => {
    expect(typeof proxyHook).toBe('function');
  });
  test('import { cleanup } from "react-proxy-hook"', () => {
    expect(typeof cleanup).toBe('function');
  });
  test('works with objects', () => {
    const returnValue = useFooProxy({ foo: 'bar' });
    expect(returnValue).toEqual({ foo: 'bar' });
  });
  test('works with arrays', () => {
    const returnValue = useFooProxy([0, 1, 2]);
    expect(returnValue[0]).toEqual(0);
    expect(returnValue[1]).toEqual(1);
    expect(returnValue[2]).toEqual(2);
  });
  test('works with strings', () => {
    const returnValue = useFooProxy('foo');
    expect(returnValue.value).toBe('foo');
  });
  test('works with numbers', () => {
    const returnValue = useFooProxy(42);
    expect(returnValue.value).toBe(42);
  });
  test('works with null', () => {
    const returnValue = useFooProxy(null);
    expect(returnValue.value).toBe(null);
  });
  test('works with undefined', () => {
    const returnValue = useFooProxy(undefined);
    expect(returnValue.value).toBe(undefined);
  });
});
