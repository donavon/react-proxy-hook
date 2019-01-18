import 'jest-dom/extend-expect';

import { proxyHook, cleanup } from '../src';

afterEach(cleanup);

describe('proxyHook', () => {
  test('import { proxyHook } from "react-proxy-hook"', () => {
    expect(typeof proxyHook).toBe('function');
  });
  test('import { cleanup } from "react-proxy-hook"', () => {
    expect(typeof cleanup).toBe('function');
  });
});
