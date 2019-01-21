import React from 'react';
import { render, cleanup } from 'react-testing-library';

const isObject = val => typeof val === 'object' && val !== null;

const proxyHook = (hook) => {
  const Component = ({ proxy, args }) => proxy(hook(...args));

  const proxiedHook = (...args) => {
    const returnVal = {};
    const proxy = (value) => {
      const obj = Array.isArray(value) ? { ...value }
        : isObject(value) ? value
          : { value };
      Object.assign(returnVal, obj);
      return null;
    };
    render(<Component args={args} proxy={proxy} />);
    return returnVal;
  };

  return proxiedHook;
};

export {
  proxyHook,
  cleanup,
};
