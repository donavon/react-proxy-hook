import React from 'react';
import { render, cleanup } from 'react-testing-library';

const proxyHook = (hook) => {
  const Component = ({ proxy, args }) => proxy(hook(...args));

  const proxiedHook = (...args) => {
    const returnVal = {};
    const proxy = (val) => {
      const obj = Array.isArray(val) ? { ...val } : val;
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
