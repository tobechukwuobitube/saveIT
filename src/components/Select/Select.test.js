import React from 'react';
import renderer from 'react-test-renderer';
import Select from './index';

test('Select snapshot test', () => {
  const wrapper = renderer.create(<Select />);
  expect(wrapper).toMatchSnapshot();
});
