import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmDialog from './index';

test('ConfirmDialog snapshot test', () => {
  const wrapper = renderer.create(<ConfirmDialog />);
  expect(wrapper).toMatchSnapshot();
});
