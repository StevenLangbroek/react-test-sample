import { expect } from 'chai';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
global.expect = expect;

let jsdom;

beforeEach(() => {
  jsdom = require('jsdom-global')();
})

afterEach(() => {
  jsdom();
})

export default (Component) => (props) => {
  const component = renderIntoDocument(<Component {...props} />);

  return {
    component,
    props,
    output: findDOMNode(component)
  };
}
