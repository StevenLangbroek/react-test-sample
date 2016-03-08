import { expect } from 'chai';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
global.expect = expect;

let jsdom;

before(() => {
  jsdom = require('jsdom-global')();
});

after(() => {
  jsdom();
});

export default (Component) => (props) => {
  const component = renderIntoDocument(<Component {...props} />);
  const output = findDOMNode(component);

  return {
    component,
    props,
    output
  };
};
